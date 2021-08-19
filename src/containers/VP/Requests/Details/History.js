import React from 'react';
import {
  makeStyles,
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core';

// components
import LoadingScreen from 'components/LoadingScreen';

const th = [
  { key: 'editedDate', label: '수정일시' },
  { key: 'editedAdmin', label: '수정자ID' },
  { key: 'status', label: '상태' },
  { key: 'reason', label: '사유' },
];

const History = ({ loading }) => {
  const classes = useStyles();

  return (
    <>
      <Typography variant="h4" color="textPrimary" className={classes.title}>
        이전 내역보기
      </Typography>
      <Card className={classes.root}>
        {loading && <LoadingScreen />}
        <Box minWidth={700}>
          <Table className={classes.table}>
            <colgroup>
              <col width="15%" />
              <col width="15%" />
              <col width="15%" />
              <col width="*" />
            </colgroup>
            <TableHead className={classes.th}>
              <TableRow>
                {th.map((item) => {
                  return (
                    <TableCell
                      key={item.key}
                      className={classes.cell}
                      align="center"
                    >
                      {item.label}
                    </TableCell>
                  );
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell align="center" className={classes.cell}>
                  {'2021-05-04 15:34'}
                </TableCell>
                <TableCell align="center" className={classes.cell}>
                  {'admin01'}
                </TableCell>
                <TableCell align="center" className={classes.cell}>
                  {'반려'}
                </TableCell>
                <TableCell align="center" className={classes.cell}>
                  {'반려사유는 VP신청서 내용이 부적합합니다.'}
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
  title: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
  },
  table: {
    tableLayout: 'fixed',
  },
  th: {
    backgroundColor: theme.palette.action.focus,
  },
  cell: {
    borderRightStyle: 'solid',
    borderRightColor: theme.palette.action.focus,
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
}));

export default History;
