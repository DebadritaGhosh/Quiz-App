import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

// components
import LoadingScreen from 'components/LoadingScreen';

// reducers
import { setAuthority } from 'reducers/auth';

const Auth = ({ children }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(setAuthority());
  }, [location.pathname]);

  if (!localStorage.getItem('token')) {
    return <Redirect to="/login" />;
  }

  if (auth.adminAuthorityRequesting) {
    return <LoadingScreen noOpacity />;
  }

  return children;
};

export default Auth;
