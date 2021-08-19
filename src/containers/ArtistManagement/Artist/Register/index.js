import React, { useState, useEffect } from 'react';
import { makeStyles, Typography, Box, Button } from '@material-ui/core';
import { useParams, useHistory } from 'react-router';
import axios from 'axios';
import useForm from 'hooks/useForm';
import ArtistForm from '../ArtistForm';

const RegisterContainer = () => {
  const classes = useStyles();
  const history = useHistory();
  const { _id } = useParams();
  const [loading, setLoading] = useState(false);
  const { form, changeForm } = useForm({
    nameKor: '',
    nameEng: '',
    type: 'groupSolo',
    birthdate: new Date(),
    serviceType: 'now',
    serviceDate: new Date(),
  });
  const [selectedGroups, setSelectedGroups] = useState([]);
  const [image, setImage] = useState([]);

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
        아티스트 신규등록
      </Typography>
      <ArtistForm
        form={form}
        changeForm={changeForm}
        image={image}
        setImage={setImage}
        selectedGroups={selectedGroups}
        setSelectedGroups={setSelectedGroups}
        loading={loading}
      />
      <Box className={classes.buttons} pt={1}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => history.push('/artist')}
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
