import React, { useState } from 'react';
import { makeStyles, Typography, Box, Button } from '@material-ui/core';
import { useHistory } from 'react-router';
import useForm from 'hooks/useForm';
import BasicDetails from './BasicDetails';
import AdminAuth from '../AdminAuth';

const RegisterContainer = () => {
  const classes = useStyles();
  const history = useHistory();
  const { form, changeForm } = useForm({
    id: '',
    password: '',
    passwordConfirm: '',
    username: '',
    email: '',
  });
  const [adminAuth, setAdminAuth] = useState({
    userManage: 1,
    vpManage: 1,
    adminManage: 1,
    eventManage: 1,
    artistManage: 1,
    metadataManage: 1,
    popupManage: 1,
    policyManage: 1,
    noticeboardManage: 1,
    faqManage: 1,
    qnaManage: 1,
    statisticsManage: 1,
  });

  return (
    <>
      <Typography variant="h3" color="textPrimary" className={classes.title}>
        운영진 신규등록
      </Typography>
      <BasicDetails form={form} changeForm={changeForm} />

      <Typography variant="h4" color="textPrimary" className={classes.title2}>
        권한 설정
      </Typography>

      <AdminAuth adminAuth={adminAuth} setAdminAuth={setAdminAuth} />

      <Box className={classes.buttons} pt={1}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => history.push('/admin')}
        >
          목록
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => console.log(form, adminAuth)}
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
