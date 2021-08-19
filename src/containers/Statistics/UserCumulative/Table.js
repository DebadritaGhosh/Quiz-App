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
  { key: 'vpGrowth', label: 'VP 증감', sortable: false },
  { key: 'vpCumulative', label: '누적 VP 회원수', sortable: false },
  { key: 'userGrowth', label: '일반회원 증감', sortable: false },
  { key: 'userCumulative', label: '누적 일반 회원수', sortable: false },
];

const TableContainer = ({ pagination, filter }) => {
  const classes = useStyles();

  const data = [
    {
      date: '2021-06-02',
      vpGrowth: '-1',
      vpCumulative: 47,
      userGrowth: '+3',
      userCumulative: 1532,
    },
    {
      date: '2021-06-03',
      vpGrowth: '-1',
      vpCumulative: 47,
      userGrowth: '+3',
      userCumulative: 1532,
    },
    {
      date: '2021-06-04',
      vpGrowth: '-1',
      vpCumulative: 47,
      userGrowth: '+3',
      userCumulative: 1532,
    },
    {
      date: '2021-06-05',
      vpGrowth: '-1',
      vpCumulative: 47,
      userGrowth: '+3',
      userCumulative: 1532,
    },
    {
      date: '2021-06-06',
      vpGrowth: '-1',
      vpCumulative: 47,
      userGrowth: '+3',
      userCumulative: 1532,
    },
    {
      date: '2021-06-07',
      vpGrowth: '-1',
      vpCumulative: 47,
      userGrowth: '+3',
      userCumulative: 1532,
    },
    {
      date: '2021-06-08',
      vpGrowth: '-1',
      vpCumulative: 47,
      userGrowth: '+3',
      userCumulative: 1532,
    },
  ];

  return (
    <Card className={classes.root}>
      {pagination.loading && <LoadingScreen />}
      <Box minWidth={700}>
        <Table>
          <colgroup>
            <col width="15%" />
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
                    {item.vpGrowth}
                  </TableCell>
                  <TableCell align="center" className={classes.bodyCell}>
                    {item.vpCumulative}
                  </TableCell>
                  <TableCell align="center" className={classes.bodyCell}>
                    {item.userGrowth}
                  </TableCell>
                  <TableCell align="center" className={classes.bodyCell}>
                    {item.userCumulative}
                  </TableCell>
                </TableRow>
              );
            })}
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
