import React, { useState } from 'react';
import { makeStyles, Typography, Box, Button } from '@material-ui/core';
import { useHistory } from 'react-router';
import useForm from 'hooks/useForm';
import PolicyForm from '../PolicyForm';

const RegisterContainer = () => {
  const classes = useStyles();
  const history = useHistory();
  const { form, changeForm } = useForm({
    classification: '',
    publishDate: new Date(),
    detailsKor: '',
    detailsEng: '',
    reasonKor: '',
    reasonEng: '',
  });

  return (
    <>
      <Typography variant="h3" color="textPrimary" className={classes.title}>
        방침 게시 관리 신규등록
      </Typography>
      <PolicyForm form={form} changeForm={changeForm} />
      <Box className={classes.buttons} pt={1}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => history.push('/policy')}
        >
          목록
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => console.log(form)}
        >
          저장
        </Button>
      </Box>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  title: {
    marginBottom: theme.spacing(3),
  },
  title2: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-between',

    '& > button': {
      margin: theme.spacing(0.5),
      width: 150,
    },
  },
}));

export default RegisterContainer;
