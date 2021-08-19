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
  { key: 'rank', label: '순위', sortable: false },
  { key: 'keyword', label: '검색어', sortable: false },
  { key: 'accessory', label: '액세서리', sortable: false },
  { key: 'concept', label: '컨셉', sortable: false },
  { key: 'hairColor', label: '헤어 컬러', sortable: false },
];

const TableContainer = ({ pagination, filter }) => {
  const classes = useStyles();

  const data = [
    {
      rank: '1',
      keyword: '방탄콘서트 (1,394)',
      accessory: '모자 (30,157)',
      concept: '교복 (18,242)',
      hairColor: '빨강 (735)',
    },
    {
      rank: '2',
      keyword: '방방콘 (1,256)',
      accessory: '안경 (26,503',
      concept: '교복 (18,242)',
      hairColor: '빨강 (735)',
    },
    {
      rank: '3',
      keyword: '치미 (956)',
      accessory: '화관 (22,981)',
      concept: '교복 (18,242)',
      hairColor: '빨강 (735)',
    },
    {
      rank: '4',
      keyword: '방탄콘서트 (1,394)',
      accessory: '-',
      concept: '-',
      hairColor: '빨강 (735)',
    },
    {
      rank: '5',
      keyword: '방탄콘서트 (1,394)',
      accessory: '-',
      concept: '-',
      hairColor: '빨강 (735)',
    },
  ];

  return (
    <Card className={classes.root}>
      {pagination.loading && <LoadingScreen />}
      <Box minWidth={700}>
        <Table>
          <colgroup>
            <col width="10%" />
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
                    {item.rank}
                  </TableCell>
                  <TableCell align="center" className={classes.bodyCell}>
                    {item.keyword}
                  </TableCell>
                  <TableCell align="center" className={classes.bodyCell}>
                    {item.accessory}
                  </TableCell>
                  <TableCell align="center" className={classes.bodyCell}>
                    {item.concept}
                  </TableCell>
                  <TableCell align="center" className={classes.bodyCell}>
                    {item.hairColor}
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
