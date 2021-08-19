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
                <TableCell align="center">그룹명(국문)</TableCell>
                <TableCell>방탄소년단</TableCell>
                <TableCell align="center">그룹명(영문)</TableCell>
                <TableCell>BTS</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell align="center" className={classes.th}>
                  이미지
                </TableCell>
                <TableCell>
                  <SingleImageDisplay image={image} />
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
