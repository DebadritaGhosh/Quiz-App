import React, { useState, useEffect } from 'react';
import { makeStyles, Typography, Box, Button } from '@material-ui/core';
import { useParams } from 'react-router';
import axios from 'axios';
import { useHistory, useRouteMatch } from 'react-router';
import BasicDetails from './BasicDetails';
import History from './History';

//components
import ConfirmModal from 'components/ConfirmModal';
import ModalWithInput from 'components/ModalWithInput';

const DetailsContainer = () => {
  const classes = useStyles();
  const history = useHistory();
  const match = useRouteMatch();
  const { _id } = useParams();
  const [loading, setLoading] = useState(false);
  const [resetEmailModal, setResetEmailModal] = useState(false);
  const [revokeMembershipModal, setRevokeMembershipModal] = useState(false);
  const [terminateModal, setTerminateModal] = useState(false);

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
        VP 상세보기
      </Typography>
      <BasicDetails loading={loading} setResetEmailModal={setResetEmailModal} />
      <Box
        className={classes.buttons}
        display="flex"
        justifyContent="center"
        alignItems="center"
        pt={1}
      >
        <div className={classes.buttonsContainer}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              localStorage.setItem('tabIndex', 1);
              history.push('/vp');
            }}
          >
            목록
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              history.push(`${match.url}/edit`);
            }}
          >
            수정
          </Button>
        </div>

        <div className={classes.buttonsContainer}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setRevokeMembershipModal(true)}
          >
            멤버십 해지
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setTerminateModal(true)}
          >
            탈퇴 처리
          </Button>
        </div>
      </Box>

      <History loading={loading} />
      <ConfirmModal
        primaryText="비밀번호 재설정 링크가 회원의 이메일 주소로 발송됩니다. 진행하시겠습니까?"
        open={resetEmailModal}
        onClose={() => setResetEmailModal(false)}
        onApply={() => {
          setResetEmailModal(false);
          alert('회원의 이메일 주소로 비밀번호 재설정 링크를 전송했습니다.');
        }}
      />
      <ConfirmModal
        primaryText="해당 VP의 멤버십을 해지하시겠습니까?"
        open={revokeMembershipModal}
        onClose={() => setRevokeMembershipModal(false)}
        onApply={() => {
          setRevokeMembershipModal(false);
        }}
      />
      <ModalWithInput
        primaryText="해당 사용자를 탈퇴 처리하시겠습니까? 사용자의 이메일 주소로 회원탈퇴 메일이 전송됩니다."
        textFieldLabel="탈퇴 사유:"
        open={terminateModal}
        onClose={() => setTerminateModal(false)}
        onApply={() => {
          alert('탈퇴 처리되었습니다.');
          setTerminateModal(false);
        }}
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
  buttonsContainer: {
    '& > button': {
      margin: theme.spacing(0.5),
    },
  },
}));

export default DetailsContainer;
