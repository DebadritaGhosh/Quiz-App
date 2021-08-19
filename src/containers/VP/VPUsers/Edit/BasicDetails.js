import React, { useState } from 'react';
import {
  makeStyles,
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Button,
  Link,
  TextField,
} from '@material-ui/core';
import { useHistory } from 'react-router';

// components
import LoadingScreen from 'components/LoadingScreen';
import ConfirmModal from 'components/ConfirmModal';
import AddArtist from 'components/AddArtist';

const BasicDetails = ({
  loading,
  form,
  changeForm,
  selectedArtists,
  setSelectedArtists,
}) => {
  const classes = useStyles();
  const history = useHistory();

  const [editModal, setEditModal] = useState(false);
  const [notSavedModal, setNotSavedModal] = useState(false);

  return (
    <>
      <Card className={classes.root}>
        {loading && <LoadingScreen />}
        <Box minWidth={700}>
          <Table>
            <colgroup>
              <col className={classes.th} />
              <col className={classes.td} />
              <col className={classes.th} />
              <col className={classes.td} />
            </colgroup>
            <TableBody>
              <TableRow>
                <TableCell align="center">ID</TableCell>
                <TableCell>greensugarsuga123</TableCell>
                <TableCell align="center">VP상태</TableCell>
                <TableCell>승인완료</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">사용자명</TableCell>
                <TableCell>이승훈</TableCell>
                <TableCell align="center">비밀번호</TableCell>
                <TableCell>
                  <Button
                    disabled={true}
                    variant="outlined"
                    color="secondary"
                    size="small"
                  >
                    재설정
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">
                  닉네임 <span className={classes.redStar}>*</span>
                </TableCell>
                <TableCell>
                  <TextField
                    fullWidth
                    variant="outlined"
                    name="nickname"
                    value={form.nickname}
                    onChange={(e) => changeForm('nickname', e.target.value)}
                  />
                </TableCell>
                <TableCell align="center">이메일 주소</TableCell>
                <TableCell>dkssud137@naver.com</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">국적</TableCell>
                <TableCell>대한민국</TableCell>
                <TableCell align="center">전화번호</TableCell>
                <TableCell>+82 010-0000-0000</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell align="center" className={classes.th}>
                  아티스트 <span className={classes.redStar}>*</span>
                </TableCell>
                <TableCell>
                  <AddArtist
                    selectedArtists={selectedArtists}
                    setSelectedArtists={setSelectedArtists}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={classes.th}>
                  트위터 주소 <span className={classes.redStar}>*</span>
                </TableCell>
                <TableCell>
                  <TextField
                    fullWidth
                    variant="outlined"
                    name="twitter"
                    value={form.twitter}
                    onChange={(e) => changeForm(e.target.name, e.target.value)}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={classes.th}>
                  REST 상태
                </TableCell>
                <TableCell>
                  <Link>ON</Link>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell align="center" className={classes.th}>
                  REST 설정일
                </TableCell>
                <TableCell className={classes.td}>YYYY-MM-DD</TableCell>
                <TableCell align="center" className={classes.th}>
                  REST 종료예정일
                </TableCell>
                <TableCell className={classes.td}>YYYY-MM-DD</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={classes.th}>
                  마일리지
                </TableCell>
                <TableCell className={classes.td}>27</TableCell>
                <TableCell align="center" className={classes.th}>
                  멤버십 상태
                </TableCell>
                <TableCell className={classes.td}>ON</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={classes.th}>
                  가입일시
                </TableCell>
                <TableCell className={classes.td}>YYYY-MM-DD hh:mm</TableCell>
                <TableCell align="center" className={classes.th}>
                  최근접속 일시
                </TableCell>
                <TableCell className={classes.td}>YYYY-MM-DD hh:mm</TableCell>
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
            history.push('/vp');
          }}
        >
          목록
        </Button>

        <Button
          variant="contained"
          color="primary"
          onClick={() => setEditModal(true)}
        >
          저장
        </Button>
      </Box>
      <ConfirmModal
        primaryText="저장하시겠습니까?"
        open={editModal}
        onClose={() => setEditModal(false)}
        onApply={() => {
          setEditModal(false);
          alert('Successfully Edited!');
        }}
      />
      <ConfirmModal
        primaryText="저장되지 않은 정보가 있습니다. 목록으로 이동하시겠습니까?"
        open={notSavedModal}
        onClose={() => setNotSavedModal(false)}
        onApply={() => {
          setNotSavedModal(false);
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
  requestStatus: {
    marginLeft: theme.spacing(2),
  },
  onOffButtonContainer: {
    '& > button': {
      margin: theme.spacing(0.5),
    },
  },
  onButton: {
    backgroundColor: 'green',
    color: 'white',
  },
  offButton: {
    backgroundColor: 'red',
    color: 'white',
  },
  queryField: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  },
  redStar: {
    fontSize: 18,
    color: 'red',
  },
}));

export default BasicDetails;
