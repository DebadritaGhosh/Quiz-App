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
  TableSortLabel,
  Link,
} from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import { useRouteMatch, useHistory } from 'react-router';

// components
import LoadingScreen from 'components/LoadingScreen';
import Pagination from 'components/Pagination';

// utils
import { dateTimePrettier } from 'utils';

const th = [
  { key: 'No', label: 'No', sortable: false },
  { key: '_id', label: 'ID', sortable: true },
  { key: 'name', label: '사용자명', sortable: true },
  { key: 'email', label: '이메일 주소', sortable: true },
  { key: 'createdAt', label: '등록일시', sortable: true },
];

const TableContainer = ({ pagination, filter }) => {
  const classes = useStyles();
  const history = useHistory();
  const match = useRouteMatch();
  const { orderBy, sort } = filter.form;

  const handleSort = (value) => {
    const newOrderBy = !orderBy || orderBy !== value ? value : orderBy;
    const newSort =
      !orderBy || orderBy !== value ? 'asc' : sort === 'asc' ? 'desc' : 'asc';
    filter.changeFormValues({
      orderBy: newOrderBy,
      sort: newSort,
    });
  };

  const data = [
    {
      _id: 1,
      ID: '카카오',
      nickname: 'alien',
      email: 'alien@mars.com',
      createdDate: '2021-05-06 16:34',
    },
    {
      _id: 2,
      ID: '네이버',
      nickname: 'great',
      email: 'great@rast.com',
      createdDate: '2021-05-06 16:34',
    },
    {
      _id: 3,
      ID: '트위터',
      nickname: '지민뉴',
      email: 'jooya37@hanmail.net',
      createdDate: '2021-05-06 16:34',
    },
  ];

  return (
    <Card className={classes.root}>
      {pagination.loading && <LoadingScreen />}
      <Box minWidth={700}>
        <Table className={classes.table}>
          <colgroup>
            <col width="5%" />
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
                    {item.sortable ? (
                      <TableSortLabel
                        active={orderBy === item.key}
                        direction={orderBy === item.key ? sort : 'asc'}
                        onClick={() => handleSort(item.key)}
                      >
                        {item.label}
                      </TableSortLabel>
                    ) : (
                      item.label
                    )}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => {
              return (
                <TableRow
                  key={item._id}
                  hover
                  onClick={() => history.push(`${match.url}/${item._id}`)}
                >
                  <TableCell className={classes.bodyCell} align="center">
                    {item._id}
                  </TableCell>
                  <TableCell className={classes.bodyCell} align="center">
                    <Link
                      color="inherit"
                      component={RouterLink}
                      to={`${match.url}/${item._id}`}
                    >
                      {item.ID}
                    </Link>
                  </TableCell>
                  <TableCell className={classes.bodyCell} align="center">
                    {item.nickname}
                  </TableCell>
                  <TableCell className={classes.bodyCell} align="center">
                    {item.email}
                  </TableCell>
                  <TableCell className={classes.bodyCell} align="center">
                    {dateTimePrettier(item.createdAt)}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Box>
      <Pagination
        onChangeLimit={pagination.setLimit}
        onChangeSkip={pagination.setSkip}
        limit={pagination.limit}
        skip={pagination.skip}
        totalCount={pagination.totalCount}
        limitOptions={pagination.limitOptions}
      />
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
  cell: {
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
  headRow: { backgroundColor: theme.palette.action.focus },
  headCell: {
    borderRightStyle: 'solid',
    borderRightColor: theme.palette.action.focus,
  },
  bodyCell: {
    borderRightStyle: 'solid',
    borderRightColor: theme.palette.action.focus,
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
}));

export default TableContainer;
