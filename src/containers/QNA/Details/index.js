import React, { useState, useEffect } from 'react';
import { makeStyles, Typography, Box, Button } from '@material-ui/core';
import { useParams, useHistory } from 'react-router';
import axios from 'axios';
import BasicDetails from './BasicDetails';
import RespondForm from './RespondForm';
import useForm from 'hooks/useForm';

const DetailsContainer = () => {
  const classes = useStyles();
  const history = useHistory();
  const { _id } = useParams();
  const [loading, setLoading] = useState(false);
  const { form, changeForm } = useForm({
    answer: '',
  });

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
        {'Q&A 상세'}
      </Typography>
      <BasicDetails loading={loading} />
      <RespondForm form={form} changeForm={changeForm} />
      <Box
        className={classes.buttons}
        display="flex"
        justifyContent="center"
        alignItems="center"
        pt={1}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            history.push('/qna');
          }}
        >
          목록
        </Button>
      </Box>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  title: {
    marginBottom: theme.spacing(3),
  },

  buttons: {
    display: 'flex',
    justifyContent: 'space-between',
    '& > button': {
      margin: theme.spacing(0.5),
      width: 100,
    },
  },
}));

export default DetailsContainer;
