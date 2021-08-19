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
import MultipleImageDisplay from 'components/MultipleImageDisplay';

const BasicDetails = ({ loading }) => {
  const classes = useStyles();
  const images = [
    {
      url: 'https://devilz-storage.s3.ap-northeast-2.amazonaws.com/portfolio/images/2021-03-17iaLkMwimg4.jpg',
      name: 'lorempicsumimage.jpeg',
      size: 20153,
    },
    {
      url: 'https://devilz-storage.s3.ap-northeast-2.amazonaws.com/portfolio/images/2021-03-17iaLkMwimg4.jpg',
      name: 'lorempicsumimage.jpeg',
      size: 20153,
    },
    {
      url: 'https://devilz-storage.s3.ap-northeast-2.amazonaws.com/portfolio/images/2021-03-17iaLkMwimg4.jpg',
      name: 'lorempicsumimage.jpeg',
      size: 20153,
    },
  ];

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
                <TableCell align="center">카테문의 상태 고리</TableCell>
                <TableCell>대기</TableCell>
                <TableCell align="center">문의 일시</TableCell>
                <TableCell>YYYY-MM-DD hh:mm</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">사용자 구분</TableCell>
                <TableCell>유저</TableCell>
                <TableCell align="center">닉네임</TableCell>
                <TableCell>NUNUNUNU</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell align="center" className={classes.th}>
                  이메일 주소
                </TableCell>
                <TableCell>wejiorfsdi@naver.com</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={classes.th}>
                  카테고리
                </TableCell>
                <TableCell>서비스</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={classes.th}>
                  문의 제목
                </TableCell>
                <TableCell>샤이니도 추가해주세요!</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={classes.th}>
                  문의 내용
                </TableCell>
                <TableCell>
                  아티스트 선택할 때 보니까 샤이니가 없는데 샤이니도
                  추가해주세요!
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={classes.th}>
                  첨부이미지
                </TableCell>
                <TableCell>
                  <MultipleImageDisplay images={images} />
                </TableCell>
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
