import React, { useState, useEffect } from 'react';
import { makeStyles, Typography, Box, Button } from '@material-ui/core';
import { useParams, useHistory } from 'react-router';
import axios from 'axios';
import useForm from 'hooks/useForm';
import PopupForm from '../PopupForm';

const EditContainer = () => {
  const classes = useStyles();
  const history = useHistory();
  const { _id } = useParams();
  const [loading, setLoading] = useState(false);
  const { form, changeForm } = useForm({
    registerStatus: 'active',
    orderOfExposure: '2',
    title: '',
    startDate: '2020-05-06 15:00',
    endDate: '2021-06-06 15:00',
    registerType: 'image',
    detailsKor: 'some korean content',
    detailsEng: 'some english content',
    popupLink: 'notice',
    externalLink: '',
  });
  const [image, setImage] = useState({
    url: 'https://devilz-storage.s3.ap-northeast-2.amazonaws.com/portfolio/images/2021-03-17iaLkMwimg4.jpg',
    name: 'lorempicsumimage.jpeg',
    size: 20153,
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
        팝업 수정
      </Typography>
      <PopupForm
        form={form}
        changeForm={changeForm}
        image={image}
        setImage={setImage}
        loading={loading}
      />
      <Box className={classes.buttons} pt={1}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => history.push('/popup')}
        >
          목록
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => console.log(form, image)}
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
