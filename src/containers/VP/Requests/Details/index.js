import React, { useState, useEffect } from 'react';
import { makeStyles, Box, Button } from '@material-ui/core';
import { useParams } from 'react-router';
import axios from 'axios';
import BasicDetails from './BasicDetails';
import History from './History';
import RespondModal from './RespondModal';
import { useHistory } from 'react-router';

// hooks
import useForm from 'hooks/useForm';

const DetailsContainer = () => {
  const status = 1;
  const classes = useStyles();
  const history = useHistory();
  const { _id } = useParams();
  const [loading, setLoading] = useState(false);
  const [statusModal, setStatusModal] = useState(false);
  const [selectedArtists, setSelectedArtists] = useState([]);
  const { form, changeForm } = useForm({
    result: 'accept',
    reason: '',
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
      <BasicDetails loading={loading} />
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
            history.push('/vp');
          }}
        >
          목록
        </Button>
        {status === 1 && (
          <Button
            variant="contained"
            color="primary"
            onClick={() => setStatusModal(true)}
          >
            상태변경
          </Button>
        )}
      </Box>

      <History loading={loading} />
      <RespondModal
        open={statusModal}
        onClose={() => setStatusModal(false)}
        onApply={() => {
          console.log('Done!');
        }}
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
  buttons: {
    display: 'flex',
    justifyContent: 'space-between',
    '& > button': {
      margin: theme.spacing(0.5),
      width: 150,
    },
  },
}));

export default DetailsContainer;
