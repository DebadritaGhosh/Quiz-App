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
} from '@material-ui/core';

// components
import LoadingScreen from 'components/LoadingScreen';

const th = [
  { key: 'date', label: '일자', sortable: false },
  { key: 'application', label: 'VP 신청', sortable: false },
  { key: 'approved', label: 'VP 승인', sortable: false },
  { key: 'terminated', label: '탈퇴', sortable: false },
  { key: 'cumulative', label: '누적 VP 회원수', sortable: false },
];

const TableContainer = ({ pagination, filter }) => {
  const classes = useStyles();

  const data = [
    {
      date: '2021-06-02',
      application: 12,
      approved: 3,
      terminated: 3,
      cumulative: 1532,
    },
    {
      date: '2021-06-03',
      application: 12,
      approved: 3,
      terminated: 3,
      cumulative: 1532,
    },
    {
      date: '2021-06-04',
      application: 12,
      approved: 3,
      terminated: 3,
      cumulative: 1532,
    },
    {
      date: '2021-06-05',
      application: 12,
      approved: 3,
      terminated: 3,
      cumulative: 1532,
    },
    {
      date: '2021-06-06',
      application: 12,
      approved: 3,
      terminated: 3,
      cumulative: 1532,
    },
    {
      date: '2021-06-07',
      application: 12,
      approved: 3,
      terminated: 3,
      cumulative: 1532,
    },
    {
      date: '2021-06-08',
      application: 12,
      approved: 3,
      terminated: 3,
      cumulative: 1532,
    },
  ];

  return (
    <Card className={classes.root}>
      {pagination.loading && <LoadingScreen />}
      <Box minWidth={700}>
        <Table>
          <colgroup>
            <col width="20%" />
            <col width="20%" />
            <col width="20%" />
            <col width="20%" />
            <col width="20%" />
          </colgroup>
          <TableHead className={classes.headRow}>
            <TableRow>
              {th.map((item) => {
                return (
                  <TableCell
                    key={item.key}
                    className={classes.headCell}
                    align="center"
                  >
                    {item.label}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item, index) => {
              return (
                <TableRow key={index}>
                  <TableCell align="center" className={classes.bodyCell}>
                    {item.date}
                  </TableCell>
                  <TableCell align="center" className={classes.bodyCell}>
                    {item.application}
                  </TableCell>
                  <TableCell align="center" className={classes.bodyCell}>
                    {item.approved}
                  </TableCell>
                  <TableCell align="center" className={classes.bodyCell}>
                    {item.terminated}
                  </TableCell>
                  <TableCell align="center" className={classes.bodyCell}>
                    {item.cumulative}
                  </TableCell>
                </TableRow>
              );
            })}
            <TableRow className={classes.headRow}>
              <TableCell align="center" className={classes.bodyCell}>
                {'합계'}
              </TableCell>
              <TableCell align="center" className={classes.bodyCell}>
                {81}
              </TableCell>
              <TableCell align="center" className={classes.bodyCell}>
                {4}
              </TableCell>
              <TableCell align="center" className={classes.bodyCell}>
                {4}
              </TableCell>
              <TableCell align="center" className={classes.bodyCell}>
                {'-'}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>
    </Card>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
  },
  table: {
    tableLayout: 'fixed',
  },

  headRow: { backgroundColor: theme.palette.action.focus },
  headCell: {
    borderRightStyle: 'solid',
    borderRightColor: theme.palette.action.focus,
  },
  bodyCell: {
    borderRightStyle: 'solid',
    borderRightColor: theme.palette.action.focus,
  },
}));

export default TableContainer;
