import { handleActions } from 'redux-actions';
import axios from 'axios';

// utils
import { jwtDecode, setAuthorization } from 'utils';

const LOGIN_REQUEST = '@auth/login-request';
const LOGIN_SUCCESS = '@auth/login-success';
const LOGIN_FAILURE = '@auth/login-failure';
const LOGOUT = '@auth/logout';
const SET_AUTHORITY_REQUEST = '@auth/set-authority-request';
const SET_AUTHORITY_SUCCESS = '@auth/set-authority-success';
const SET_AUTHORITY_FAILURE = '@auth/set-authority-failure';

export const login = (email, password, keepLoggedIn) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });

    const { data } = await axios({
      method: 'post',
      url: '/user/login',
      data: {
        userId: email,
        password,
      },
    });

    if (keepLoggedIn === true) {
      localStorage.setItem('token', JSON.stringify(data.data));
    } else {
      sessionStorage.setItem('token', JSON.stringify(data.data));
    }

    if (
      localStorage.getItem('keepLoggedIn') === undefined ||
      localStorage.getItem('keepLoggedIn') === null
    ) {
      localStorage.setItem('keepLoggedIn', keepLoggedIn);
    }

    setAuthorization(data.accessToken);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: { token: data, userInfo: jwtDecode(data.accessToken) },
    });
  } catch (err) {
    dispatch({ type: LOGIN_FAILURE });
    throw err;
  }
};

export const loginAuto = () => (dispatch) => {
  const token = localStorage.getItem('token');

  if (token) {
    const data = JSON.parse(token);

    setAuthorization(data.accessToken);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: { token: data, userInfo: jwtDecode(data.accessToken) },
    });
  } else {
    dispatch({ type: LOGIN_FAILURE });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('token');

  setAuthorization('');
  dispatch({ type: LOGOUT });
};

export const setAuthority = () => async (dispatch) => {
  try {
    dispatch({ type: SET_AUTHORITY_REQUEST });

    const { data } = await axios.get('/admin/my/authority');

    dispatch({
      type: SET_AUTHORITY_SUCCESS,
      payload: {
        adminAuthority: {
          manageUser: [...data.manageUser],
          manageAdmin: [...data.manageAdmin],
          manageNotice: [...data.manageNotice],
        },
      },
    });
  } catch (err) {
    console.log(err);
    if (err.response.data.reason === 'TOKEN_CHANGED') {
      dispatch(logout());
      alert('다른 곳에서 해당 계정에 접속하였습니다.\n로그아웃합니다.');
    }
    dispatch({ type: SET_AUTHORITY_FAILURE });
  }
};

const initialState = {
  requesting: false,
  token: {
    accessToken: '',
    refreshToken: '',
  },
  userInfo: {},
  adminAuthorityRequesting: false,
  adminAuthority: {
    manageUser: [],
    manageAdmin: [],
    manageNotice: [],
  },
};

export default handleActions(
  {
    [LOGIN_REQUEST]: (state, action) => {
      return {
        ...state,
        requesting: true,
      };
    },
    [LOGIN_SUCCESS]: (state, action) => {
      return {
        ...state,
        requesting: false,
        token: action.payload.token,
        userInfo: action.payload.userInfo,
      };
    },
    [LOGIN_FAILURE]: (state, action) => {
      return {
        ...state,
        requesting: true,
        userInfo: initialState.userInfo,
      };
    },
    [LOGOUT]: (state, action) => {
      return {
        ...state,
        token: initialState.token,
        userInfo: initialState.userInfo,
      };
    },
    [SET_AUTHORITY_REQUEST]: (state, action) => {
      return {
        ...state,
        adminAuthorityRequesting: true,
      };
    },
    [SET_AUTHORITY_SUCCESS]: (state, action) => {
      return {
        ...state,
        adminAuthorityRequesting: false,
        adminAuthority: action.payload.adminAuthority,
      };
    },
    [SET_AUTHORITY_FAILURE]: (state, action) => {
      return {
        ...state,
        adminAuthorityRequesting: false,
        adminAuthority: initialState.adminAuthority,
      };
    },
  },
  initialState
);
