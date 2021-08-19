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
  const colorCode = '#CB4335';

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
                <TableCell align="center">컬러명(국문)</TableCell>
                <TableCell>빨강색</TableCell>
                <TableCell align="center">컬러명(영문)</TableCell>
                <TableCell>Red</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">컬러코드</TableCell>
                <TableCell>#FFF0000</TableCell>
                <TableCell align="center">컬러 표시</TableCell>
                <TableCell>
                  <div
                    className={classes.colorPreview}
                    style={{ backgroundColor: colorCode }}
                  ></div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">등록자</TableCell>
                <TableCell>admin01</TableCell>
                <TableCell align="center">등록일시</TableCell>
                <TableCell>2020-05-06 12:36</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">수정자</TableCell>
                <TableCell>admin02</TableCell>
                <TableCell align="center">수정일시</TableCell>
                <TableCell>2020-05-06 12:36</TableCell>
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
  colorPreview: {
    height: '30px',
    width: '80px',
  },
}));

export default BasicDetails;
