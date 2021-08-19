import React from 'react';
import { Redirect } from 'react-router-dom';

const GuestGuard = ({ children }) => {
  if (localStorage.getItem('token')) {
    return <Redirect to="/user" />;
  }

  return children;
};

export default GuestGuard;
