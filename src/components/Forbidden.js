import React from 'react';
import { Box, Typography, makeStyles } from '@material-ui/core';
import { ShieldOff } from 'react-feather';

const Forbidden = () => {
  const classes = useStyles();

  return (
    <Box className={classes.wrapper}>
      <ShieldOff className={classes.icon} size={50} />
      <Typography color="textPrimary">
        해당 페이지에 접근하실 수 있는 권한이 없습니다.
      </Typography>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  icon: {
    color: theme.palette.text.primary,
    marginBottom: theme.spacing(3),
  },
}));

export default Forbidden;
