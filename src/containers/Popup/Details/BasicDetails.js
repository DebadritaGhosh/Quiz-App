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
} from '@material-ui/core';

// components
import LoadingScreen from 'components/LoadingScreen';
import SingleImageDisplay from 'components/SingleImageDisplay';

const BasicDetails = ({ loading }) => {
  const classes = useStyles();
  const image = {
    url: 'https://devilz-storage.s3.ap-northeast-2.amazonaws.com/portfolio/images/2021-03-17iaLkMwimg4.jpg',
    name: 'lorempicsumimage.jpeg',
    size: 20153,
  };

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
                <TableCell align="center">등록 상태</TableCell>
                <TableCell>활성</TableCell>
                <TableCell align="center">노출 순서</TableCell>
                <TableCell>2</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell align="center" className={classes.th}>
                  팝업명
                </TableCell>
                <TableCell>바이브러리 첫 전시회 개최</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={classes.th}>
                  게시기간
                </TableCell>
                <TableCell>YYYY-MM-DD hh:mm ~ YYYY-MM-DD hh:mm</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={classes.th}>
                  등록 구분
                </TableCell>
                <TableCell>이미지 </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={classes.th}>
                  이미지
                </TableCell>
                <TableCell>
                  <SingleImageDisplay image={image} />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={classes.th}>
                  팝업 링크
                </TableCell>
                <TableCell>
                  공지사항 <br />
                  {' 공지 > 바이브러리 신규 아티스트는 누구일까요?'}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={classes.th}>
                  미리보기
                </TableCell>
                <TableCell>
                  <Button variant="contained" size="small">
                    미리보기
                  </Button>
                </TableCell>
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
                <TableCell className={classes.td}>admin01</TableCell>
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
