import React, { useState } from 'react';
import { makeStyles, Typography, Box, Button } from '@material-ui/core';
import { useHistory } from 'react-router';
import useForm from 'hooks/useForm';
import moment from 'moment';
import EventForm from '../EventForm';

const RegisterContainer = () => {
  const classes = useStyles();
  const history = useHistory();
  const { form, changeForm } = useForm({
    eventType: 'cupholder',
    startDate: moment(new Date()).add(1, 'days').set({ hour: 10, minute: 0 }),
    endDate: moment(new Date()).add(3, 'days').set({ hour: 18, minute: 0 }),
    mileage: 5000,
    recruitsNum: 2,
    detailsKor: '',
    detailsEng: '',
  });

  return (
    <>
      <Typography variant="h3" color="textPrimary" className={classes.title}>
        이벤트 관리 신규등록
      </Typography>

      <EventForm isEdit={false} form={form} changeForm={changeForm} />
      <Box className={classes.buttons} pt={1}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => history.push('/event')}
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
