import React from 'react';
import { Button, makeStyles } from '@material-ui/core';
import { Info as InfoIcon } from 'react-feather';
import { useHistory } from 'react-router';

const MyInfo = ({ setOpen }) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Button
      color="inherit"
      size="small"
      variant="outlined"
      onClick={() => {
        history.push('/my-info');
        setOpen(false);
      }}
    >
      <InfoIcon className={classes.smallMarginRight} />
      나의 계정정보
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

export default MyInfo;
