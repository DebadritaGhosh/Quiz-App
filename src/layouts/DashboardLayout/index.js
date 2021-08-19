import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import NavBar from './NavBar';
import TopBar from './TopBar';

// components
import Forbidden from 'components/Forbidden';

// hooks
import useAuthority from 'hooks/useAuthority';

const DashboardLayout = ({ children }) => {
  const classes = useStyles();
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  const status = useSelector((store) => store.ui.status);
  // const isSatisfy = useAuthority('l');
  const isSatisfy = true; // Authority disabled

  if (status === 'NOT_FOUND') {
    return <Redirect to="/404" />;
  }

  return (
    <div className={classes.root}>
      <TopBar onMobileNavOpen={() => setMobileNavOpen(true)} />
      <NavBar
        onMobileClose={() => setMobileNavOpen(false)}
        openMobile={isMobileNavOpen}
      />
      <div className={classes.wrapper}>
        {isSatisfy ? (
          <div className={classes.contentContainer}>
            <div className={classes.content}>{children}</div>
          </div>
        ) : (
          <Forbidden />
        )}
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    width: '100%',
  },
  wrapper: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 256,
    },
  },
  contentContainer: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
  },
  content: {
    flex: '1 1 auto',
    height: '100%',
    overflow: 'auto',
  },
}));

DashboardLayout.propTypes = {
  children: PropTypes.any,
};

export default DashboardLayout;
