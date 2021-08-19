import React from 'react';
import { Button, makeStyles } from '@material-ui/core';
import { Power as PowerIcon } from 'react-feather';
import { useDispatch } from 'react-redux';

// ruducers
import { logout } from 'reducers/auth';

const Logout = ({ setOpen }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Button
      color="primary"
      size="small"
      variant="outlined"
      onClick={() => {
        setOpen(false);
        if (window.confirm('로그아웃 하시겠습니까?')) {
          dispatch(logout());
        }
      }}
    >
      <PowerIcon className={classes.smallMarginRight} />
      로그아웃
    </Button>
  );
};

const useStyles = makeStyles((theme) => ({
  popover: {
    width: 320,
    padding: theme.spacing(2),
  },
  smallMarginRight: {
    marginRight: 10,
  },
}));

export default Logout;
