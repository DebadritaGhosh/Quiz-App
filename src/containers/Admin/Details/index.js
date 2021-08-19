import React, { useState, useEffect } from 'react';
import { makeStyles, Typography, Box, Button } from '@material-ui/core';
import { useParams, useHistory, useRouteMatch } from 'react-router';
import axios from 'axios';

import BasicDetails from './BasicDetails';
import AdminAuthority from './AdminAuthority';
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
        운영진 상세보기
      </Typography>
      <BasicDetails loading={loading} />
      <AdminAuthority />
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
            history.push('/admin');
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
        primaryText="관리자 삭제 시, 해당 관리자가 작성한 게시글은 삭제되지 않습니다. 관리자를 삭제 처리하시겠습니까?"
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
