import React, { useState } from 'react';
import { makeStyles, Typography, Box, Button } from '@material-ui/core';
import { useHistory } from 'react-router';
import useForm from 'hooks/useForm';
import NoticeForm from '../NoticeForm';

const RegisterContainer = () => {
  const classes = useStyles();
  const history = useHistory();
  const { form, changeForm } = useForm({
    category: '',
    target: '',
    titleKor: '',
    titleEng: '',
    detailsKor: '',
    detailsEng: '',
  });

  return (
    <>
      <Typography variant="h3" color="textPrimary" className={classes.title}>
        공지사항 신규등록
      </Typography>
      <NoticeForm form={form} changeForm={changeForm} />
      <Box className={classes.buttons} pt={1}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => history.push('/notice')}
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
