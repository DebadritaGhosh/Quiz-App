import React, { useState, useEffect } from 'react';
import { makeStyles, Typography, Box, Button } from '@material-ui/core';
import { useParams, useHistory } from 'react-router';
import axios from 'axios';
import useForm from 'hooks/useForm';
import BasicDetails from './BasicDetails';
import AdminAuth from '../AdminAuth';

const EditContainer = () => {
  const classes = useStyles();
  const history = useHistory();
  const { _id } = useParams();
  const [loading, setLoading] = useState(false);
  const { form, changeForm } = useForm({
    username: '',
    email: '',
  });
  const [adminAuth, setAdminAuth] = useState({
    userManage: 1,
    vpManage: 1,
    adminManage: 1,
    eventManage: 1,
    artistManage: 1,
    metadataManage: 0,
    popupManage: 1,
    policyManage: 0,
    noticeboardManage: 1,
    faqManage: 1,
    qnaManage: 0,
    statisticsManage: 1,
  });

  useEffect(() => {
    const fetchArticle = () => {
      setLoading(true);
      axios
        .get(`/user/${_id}`)
        .then(({ data }) => {
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    };
    fetchArticle();
  }, []);

  return (
    <>
      <Typography variant="h3" color="textPrimary" className={classes.title}>
        운영진 수정
      </Typography>
      <BasicDetails loading={loading} form={form} changeForm={changeForm} />
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

export default EditContainer;
