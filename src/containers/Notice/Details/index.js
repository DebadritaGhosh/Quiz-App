import React, { useState, useEffect } from 'react';
import { makeStyles, Typography, Box, Button } from '@material-ui/core';
import { useParams, useHistory, useRouteMatch } from 'react-router';
import axios from 'axios';
import BasicDetails from './BasicDetails';
import ConfirmModal from 'components/ConfirmModal';

const DetailsContainer = () => {
  const classes = useStyles();
  const history = useHistory();
  const match = useRouteMatch();
  const { _id } = useParams();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

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
        공지사항 상세
      </Typography>
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
            history.push('/notice');
          }}
        >
          목록
        </Button>
        <div className={classes.buttons}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setOpen(true)}
          >
            삭제
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => history.push(`${match.url}/edit`)}
          >
            수정
          </Button>
        </div>
      </Box>
      <ConfirmModal
        primaryText="해당 게시글을 삭제하시겠습니까?"
        open={open}
        onClose={() => setOpen(false)}
        onApply={() => alert('삭제되었습니다.')}
      />
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
      width: 100,
    },
  },
}));

export default DetailsContainer;
