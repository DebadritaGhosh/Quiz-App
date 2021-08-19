import React from 'react';
import {
  makeStyles,
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from '@material-ui/core';

// components
import LoadingScreen from 'components/LoadingScreen';

const BasicDetails = ({ loading }) => {
  const classes = useStyles();

  const koreanText = `바이브러리 개인정보 수집 및 처리방침 (필수) 바이브존 (이하 회사라 함)은 정보통신망 이용촉진 및 정보보호 등에 관한 법률, 개인정보보호법, 통신비밀보호법, 전기통신사업법 등 모든 관련법규를 준수하기 위하여 [바이브러리 개인정보 처리방침]을 제정하고, 정보통신서비스제공자가 준수하여야 할 관련 법령상의 개인정보보호 규정을 준수하여 관련`;

  const englishText =
    'VIBRARY Privacy Policy (Required) VibeZone (hereinafter referred to as Company) has established the [VIBRARY Privacy Policy] in order to comply with the Act on the Promotion of Information and Communications Network Utilization and Information Protection, Etc., the Personal Information Protection Act, the Protection of';

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
                <TableCell align="center">카테고리</TableCell>
                <TableCell>공지</TableCell>
                <TableCell align="center">대상</TableCell>
                <TableCell>유저/VP</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell align="center" className={classes.th}>
                  제목(국문)
                </TableCell>
                <TableCell>공지사항 제목입니다.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={classes.th}>
                  제목(영문)
                </TableCell>
                <TableCell>This is the Notice Title.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={classes.th}>
                  내용(국문)
                </TableCell>
                <TableCell>{koreanText}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={classes.th}>
                  내용(영문)
                </TableCell>
                <TableCell>{englishText}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell align="center" className={classes.th}>
                  등록자
                </TableCell>
                <TableCell className={classes.td}>admin01</TableCell>
                <TableCell align="center" className={classes.th}>
                  등록일시
                </TableCell>
                <TableCell className={classes.td}>YYYY-MM-DD</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={classes.th}>
                  수정자
                </TableCell>
                <TableCell className={classes.td}>admin02</TableCell>
                <TableCell align="center" className={classes.th}>
                  수정일시
                </TableCell>
                <TableCell className={classes.td}>YYYY-MM-DD</TableCell>
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
