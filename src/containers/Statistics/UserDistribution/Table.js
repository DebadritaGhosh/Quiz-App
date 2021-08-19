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
  { key: 'no', label: 'No.', sortable: false },
  { key: 'country', label: '국가명', sortable: false },
  { key: 'userCount', label: '사용자수', sortable: false },
  { key: 'percentage', label: '비율', sortable: false },
];

const TableContainer = ({ pagination, filter }) => {
  const classes = useStyles();

  const data = [
    {
      no: '1',
      country: '대한민국',
      userCount: 459,
      percentage: 28.76,
    },
    {
      no: '2',
      country: '일본',
      userCount: 459,
      percentage: 28.76,
    },
    {
      no: '3',
      country: '대만',
      userCount: 459,
      percentage: 28.76,
    },
    {
      no: '4',
      country: '러시아',
      userCount: 459,
      percentage: 28.76,
    },
  ];

  return (
    <Card className={classes.root}>
      {pagination.loading && <LoadingScreen />}
      <Box minWidth={700}>
        <Table>
          <colgroup>
            <col width="10%" />
            <col width="25%" />
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
                    {item.no}
                  </TableCell>
                  <TableCell align="center" className={classes.bodyCell}>
                    {item.country}
                  </TableCell>
                  <TableCell align="center" className={classes.bodyCell}>
                    {item.userCount}
                  </TableCell>
                  <TableCell align="center" className={classes.bodyCell}>
                    {item.percentage} %
                  </TableCell>
                </TableRow>
              );
            })}
            <TableRow className={classes.headRow}>
              <TableCell></TableCell>
              <TableCell className={classes.bodyCell}>{'합계'}</TableCell>
              <TableCell align="center" className={classes.bodyCell}>
                {1596}
              </TableCell>
              <TableCell align="center" className={classes.bodyCell}>
                {'100%'}
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
    marginTop: theme.spacing(2),
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
