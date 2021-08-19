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
import { useRouteMatch, useHistory } from 'react-router';

// components
import LoadingScreen from 'components/LoadingScreen';
import Pagination from 'components/Pagination';

// utils
import { dateTimePrettier } from 'utils';

const th = [
  { key: 'number', label: 'NO', sortable: false },
  { key: 'id', label: 'ID', sortable: true },
  { key: 'username', label: '사용자명', sortable: true },
  { key: 'nickname', label: '닉네임', sortable: true },
  { key: 'email', label: '이메일 주소', sortable: true },
  { key: 'status', label: '회원상태', sortable: false },
  { key: 'createdDate', label: '가입일시', sortable: true },
];

const TableContainer = ({ pagination, filter }) => {
  const classes = useStyles();
  const match = useRouteMatch();
  const history = useHistory();
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
      id: '카카오',
      username: 'alien',
      nickname: 'alien',
      email: 'alien@mars.com',
      status: '활성회원',
      createdDate: '2021-05-06 16:34',
    },
    {
      _id: 2,
      id: '네이버',
      username: 'great',
      nickname: 'alien',
      email: 'great@rast.com',
      status: '탈퇴회원',
      createdDate: '2021-05-06 16:34',
    },
    {
      _id: 3,
      id: '트위터',
      username: '지민뉴',
      nickname: 'alien',
      email: 'jooya37@hanmail.net',
      status: '활성회원',
      createdDate: '2021-05-06 16:34',
    },
  ];

  return (
    <Card className={classes.root}>
      {pagination.loading && <LoadingScreen />}
      <Box minWidth={700}>
        <Table>
          <colgroup>
            <col width="5%" />
            <col width="10%" />
            <col width="10%" />
            <col width="20%" />
            <col width="15%" />
            <col width="15%" />
            <col width="*" />
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
            {data.map((item, index) => {
              return (
                <TableRow
                  hover
                  key={item._id}
                  onClick={() => {
                    history.push(`${match.url}/request/${item._id}`);
                  }}
                >
                  <TableCell align="center" className={classes.bodyCell}>
                    {index + 1}
                  </TableCell>
                  <TableCell align="center" className={classes.bodyCell}>
                    <Link>{item.id}</Link>
                  </TableCell>
                  <TableCell align="center" className={classes.bodyCell}>
                    {item.username}
                  </TableCell>
                  <TableCell align="center" className={classes.bodyCell}>
                    {item.nickname}
                  </TableCell>
                  <TableCell align="center" className={classes.bodyCell}>
                    {item.email}
                  </TableCell>
                  <TableCell align="center" className={classes.bodyCell}>
                    {item.status}
                  </TableCell>
                  <TableCell align="center" className={classes.bodyCell}>
                    {dateTimePrettier(item.createdDate)}
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
