import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import {
  Box,
  Button,
  TextField,
  FormHelperText,
  makeStyles,
  Checkbox,
  Typography,
} from '@material-ui/core';
import { login } from 'reducers/auth';

function Form({ className, onSubmitSuccess, ...rest }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const getKeepLoggedIn =
    localStorage.getItem('keepLoggedIn') === 'true' ? true : false;
  if (!getKeepLoggedIn) localStorage.removeItem('token');
  const [keepLoggedIn, setKeepLoggedIn] = useState(getKeepLoggedIn);

  const handleKeepLoggedIn = (e) => {
    localStorage.setItem('keepLoggedIn', !keepLoggedIn);
    setKeepLoggedIn(!keepLoggedIn);
  };

  return (
    <Formik
      initialValues={{
        id: '',
        password: '',
        keepLoggedIn: getKeepLoggedIn,
      }}
      validationSchema={Yup.object().shape({
        id: Yup.string().required('아이디를 입력해주세요.'),
        password: Yup.string().max(255).required('비밀번호를 입력해주세요.'),
        keepLoggedIn: Yup.bool(),
      })}
      onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
        try {
          await dispatch(login(values.id, values.password, keepLoggedIn));
          onSubmitSuccess();
        } catch (error) {
          const message = (() => {
            switch (error.response.status) {
              case 404:
                alert('아이디 또는 비밀번호를 확인해주세요.');
                return '아이디 또는 비밀번호를 확인해주세요.';
              default:
                return '요청 처리중 오류가 발생했습니다.';
            }
          })();

          setStatus({ success: false });
          setErrors({ submit: message });
          setSubmitting(false);
        }
      }}
    >
      {({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting, // submit 로딩중인지?
        touched, // 포커스를 가졌었던 필드
        values, // form의 state
      }) => {
        return (
          <form
            noValidate
            className={clsx(classes.root, className)}
            onSubmit={handleSubmit}
            {...rest}
          >
            <TextField
              error={Boolean(touched.id && errors.id)}
              fullWidth
              autoFocus
              helperText={touched.id && errors.id}
              label="아이디"
              margin="normal"
              name="id"
              onBlur={handleBlur}
              onChange={handleChange}
              type="id"
              value={values.id}
              variant="outlined"
            />
            <TextField
              error={Boolean(touched.password && errors.password)}
              fullWidth
              helperText={touched.password && errors.password}
              label="비밀번호"
              margin="normal"
              name="password"
              onBlur={handleBlur}
              onChange={handleChange}
              type="password"
              value={values.password}
              variant="outlined"
            />
            <Checkbox
              color="primary"
              name="keepLoggedIn"
              value={values.keepLoggedIn}
              checked={keepLoggedIn}
              onChange={(e) => handleKeepLoggedIn(e)}
            />
            <Typography display="inline">아이디 저장</Typography>
            <Box mt={2}>
              <Button
                color="secondary"
                disabled={isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                로그인
              </Button>

              {
                // Show the error inside the form - replaced with alert
                /* {errors.submit && (
                <Box mt={3}>
                  <FormHelperText error>{errors.submit}</FormHelperText>
                </Box>
              )} */
              }
            </Box>
          </form>
        );
      }}
    </Formik>
  );
}

const useStyles = makeStyles(() => ({
  root: {},
}));

Form.propTypes = {
  className: PropTypes.string,
  onSubmitSuccess: PropTypes.func,
};

Form.defaultProps = {
  onSubmitSuccess: () => {},
};

export default Form;
