import React from 'react';
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
} from '@material-ui/core';

// components
import LoadingScreen from 'components/LoadingScreen';

const BasicDetails = ({ loading, setResetEmailModal }) => {
  const classes = useStyles();

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
                    variant="outlined"
                    color="secondary"
                    size="small"
                    onClick={() => setResetEmailModal(true)}
                  >
                    재설정
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">닉네임</TableCell>
                <TableCell>길동이</TableCell>
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
                  아티스트
                </TableCell>
                <TableCell>{' BTS > JiMin'}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={classes.th}>
                  트위터 주소
                </TableCell>
                <TableCell>https://twitter.com/greensugarsuga123</TableCell>
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
}));

export default BasicDetails;
