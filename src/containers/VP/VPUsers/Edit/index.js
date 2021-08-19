import React, { useState, useEffect } from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import { useParams } from 'react-router';
import axios from 'axios';

import BasicDetails from './BasicDetails';
import useForm from 'hooks/useForm';

const EditContainer = () => {
  const classes = useStyles();
  const { _id } = useParams();
  const [loading, setLoading] = useState(false);
  const { form, changeForm } = useForm({
    nickname: '',
    twitter: '',
  });

  const [selectedArtists, setSelectedArtists] = useState([]);

  useEffect(() => {
    fetchArticle();
  }, []);

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

  return (
    <>
      <Typography variant="h3" color="textPrimary" className={classes.title}>
        VP 정보수정
      </Typography>
      <BasicDetails
        form={form}
        changeForm={changeForm}
        selectedArtists={selectedArtists}
        setSelectedArtists={setSelectedArtists}
      />
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  title: {
    marginBottom: theme.spacing(3),
  },
}));

export default EditContainer;
