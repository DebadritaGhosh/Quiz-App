import React from 'react';
import {
  makeStyles,
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Link,
  Typography,
} from '@material-ui/core';

// components
import LoadingScreen from 'components/LoadingScreen';

const BasicDetails = ({ loading }) => {
  const classes = useStyles();

  return (
    <>
      <Typography variant="h3" color="textPrimary" className={classes.title}>
        VP 신청 상세보기
      </Typography>
      <Card className={classes.root}>
        {loading && <LoadingScreen />}
        <Box minWidth={700}>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell align="center" className={classes.th}>
                  ID
                </TableCell>
                <TableCell className={classes.td}>greensugarsuga123</TableCell>
                <TableCell align="center" className={classes.th}>
                  VP상태
                </TableCell>
                <TableCell className={classes.td}>승인대기</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell align="center" className={classes.th}>
                  사용자명
                </TableCell>
                <TableCell>홍길동</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Table>
            <colgroup>
              <col className={classes.th} />
              <col className={classes.td} />
              <col className={classes.th} />
              <col className={classes.td} />
            </colgroup>
            <TableBody>
              <TableRow>
                <TableCell align="center">닉네임</TableCell>
                <TableCell>그린슈가슈가</TableCell>
                <TableCell align="center">이메일 주소</TableCell>
                <TableCell>dkssud137@naver.com</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">국적</TableCell>
                <TableCell>대한민국</TableCell>
                <TableCell align="center">전화번호</TableCell>
                <TableCell>+82, 010-0000-0000</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell align="center" className={classes.th}>
                  신청 아티스트
                </TableCell>
                <TableCell> {'BTS > JiMin'}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={classes.th}>
                  트위터 주소
                </TableCell>
                <TableCell>https://twitter.com/</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={classes.th}>
                  트위터 프로필화면
                </TableCell>
                <TableCell>
                  <Link>Twitter.jpg</Link>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={classes.th}>
                  신청일시
                </TableCell>
                <TableCell>2020.05.06 14:31 </TableCell>
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
  title: {
    marginBottom: theme.spacing(3),
  },
}));

export default BasicDetails;
