import axios from 'axios';
import store from 'reducers/store';
import { logout } from 'reducers/auth';
import * as ui from 'reducers/ui';

export default () => {
  const { REACT_APP_API } = process.env;
  const token = JSON.parse(localStorage.getItem('token'));
  axios.defaults.baseURL = REACT_APP_API;
  if (token) {
    axios.defaults.headers.authorization = token.accessToken;
  }

  // request middleware
  axios.interceptors.request.use(
    (req) => {
      if (
        store.getState().auth.userInfo.exp <
        Math.ceil(new Date().valueOf() / 1000)
      ) {
        alert('로그인이 만료되었습니다.\n다시 로그인해주세요.');
        store.dispatch(logout());
      } else {
        if (
          // data가 있으면서 값들 중 하나라도 파일객체가 있다면 FormData를 사용하도록
          req.data &&
          Object.values(req.data).some((value) =>
            // 값이 배열일 경우 배열의 값들 중 하나라도 파일객체가 있다면 FormData를 사용하도록
            Array.isArray(value)
              ? value.some((arrayValue) => arrayValue instanceof File)
              : value instanceof File
          )
        ) {
          const formData = new FormData();

          for (let key in req.data) {
            const value = req.data[key];
            if (Array.isArray(value)) {
              value.forEach((currentValue) => {
                formData.append(key, currentValue);
              });
            } else {
              formData.append(key, value);
            }
          }

          req.data = formData;
        }

        return req;
      }
    },
    (err) => {
      console.log(err);
      return Promise.reject(err);
    }
  );

  // response middleware
  axios.interceptors.response.use(
    (res) => {
      store.dispatch(ui.available());
      return res;
    },
    (err) => {
      console.log(err);
      if (err.response.status === 404) {
        store.dispatch(ui.notFound());
      }
      return Promise.reject(err);
    }
  );
};
