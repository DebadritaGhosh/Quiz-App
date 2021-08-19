import React, { useEffect } from 'react';
import NProgress from 'nprogress';
import { Box, LinearProgress, makeStyles } from '@material-ui/core';
import { fade } from '@material-ui/core/styles/colorManipulator';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: 999,
    position: 'absolute',
    top: 0,
    left: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100%',
    width: '100%',
    height: '100%',
    padding: theme.spacing(3),
    backgroundColor: fade(theme.palette.background.default, 0.7),
  },
  noOpaicty: {
    backgroundColor: theme.palette.background.default,
  },
}));

function LoadingScreen({ noOpacity }) {
  const classes = useStyles();

  useEffect(() => {
    NProgress.start();

    return () => {
      NProgress.done();
    };
  }, []);

  return (
    <div className={clsx(classes.root, noOpacity && classes.noOpaicty)}>
      <Box width={400}>
        <LinearProgress />
      </Box>
    </div>
  );
}

export default LoadingScreen;
