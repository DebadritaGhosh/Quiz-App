import React, { useState, useEffect } from 'react';
import {
  makeStyles,
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Button,
  Typography,
} from '@material-ui/core';
import { useParams, useHistory } from 'react-router';
import axios from 'axios';

// components
import LoadingScreen from 'components/LoadingScreen';
import ModalWithInput from 'components/ModalWithInput';

// utils
import { dateTimePrettier } from 'utils';

const Details = () => {
  const classes = useStyles();
  const history = useHistory();
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
        회원 상세보기
      </Typography>
      <Card className={classes.root}>
        {loading && <LoadingScreen />}
        <Box minWidth={700}>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell align="center" className={classes.th}>
                  가입채널
                </TableCell>
                <TableCell className={classes.td}>카카오톡</TableCell>
                <TableCell align="center" className={classes.th}>
                  회원상태
                </TableCell>
                <TableCell className={classes.td}>활성회원</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell align="center" className={classes.th}>
                  ID
                </TableCell>
                <TableCell>Dkssud137</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell align="center" className={classes.th}>
                  닉네임
                </TableCell>
                <TableCell className={classes.td}>Nunu</TableCell>
                <TableCell align="center" className={classes.th}>
                  이메일 주소
                </TableCell>
                <TableCell className={classes.td}>
                  dkssud137@naver.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={classes.th}>
                  가입일시
                </TableCell>
                <TableCell className={classes.td}>
                  {'2021-05-06 21:35'}
                </TableCell>
                <TableCell align="center" className={classes.th}>
                  최근 접속일시
                </TableCell>
                <TableCell className={classes.td}>
                  {dateTimePrettier('2021-05-06 21:35')}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell align="center" className={classes.th}>
                  국적
                </TableCell>
                <TableCell>Republic of Korea | 대한민국</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={classes.th}>
                  선택 아티스트
                </TableCell>
                <TableCell>아스트로, 아이유, 마마무</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Box>
      </Card>
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
            history.push('/user');
          }}
        >
          목록
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            setOpen(true);
          }}
        >
          탈퇴 처리
        </Button>
      </Box>
      <ModalWithInput
        primaryText="해당 사용자를 탈퇴 처리하시겠습니까? 사용자의 이메일 주소로 회원탈퇴 메일이 전송됩니다."
        textFieldLabel="탈퇴 사유:"
        open={open}
        onClose={() => setOpen(false)}
        onApply={() => {
          alert('탈퇴 처리되었습니다.');
          setOpen(false);
        }}
      />
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
  },
  th: {
    width: '15%',
    backgroundColor: theme.palette.action.focus,
  },
  td: {
    width: '35%',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-between',
    '& > button': {
      margin: theme.spacing(0.5),
      width: 150,
    },
  },
  title: {
    marginBottom: theme.spacing(3),
  },
}));

export default Details;
