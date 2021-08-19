import React, { useState } from 'react';
import { makeStyles, Typography, Box, Button } from '@material-ui/core';
import { useParams, useHistory } from 'react-router';
import useForm from 'hooks/useForm';
import PopupForm from '../PopupForm';

const RegisterContainer = () => {
  const classes = useStyles();
  const history = useHistory();
  const { _id } = useParams();
  const [loading, setLoading] = useState(false);
  const { form, changeForm } = useForm({
    registerStatus: 'active',
    orderOfExposure: '',
    title: '',
    startDate: '2020-05-06 15:00',
    endDate: '2021-06-06 15:00',
    registerType: 'image',
    detailsKor: '',
    detailsEng: '',
    popupLink: 'noLink',
    externalLink: '',
  });
  const [image, setImage] = useState([]);

  return (
    <>
      <Typography variant="h3" color="textPrimary" className={classes.title}>
        팝업 신규등록
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

export default RegisterContainer;
