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
} from '@material-ui/core';
import { useRouteMatch, useHistory } from 'react-router';

// components
import LoadingScreen from 'components/LoadingScreen';
import Pagination from 'components/Pagination';

const th = [
  { key: 'number', label: 'NO', sortable: false },
  { key: 'userType', label: '사용자 구분', sortable: true },
  { key: 'nickname', label: '닉네임', sortable: true },
  { key: 'email', label: '이메일 주소', sortable: true },
  { key: 'category', label: '카테고리', sortable: true },
  { key: 'title', label: '문의 제목', sortable: true },
  { key: 'status', label: '문의 상태', sortable: true },
  { key: 'createdDate', label: '등록일시', sortable: true },
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
      userType: '유저',
      nickname: 'NUNUNUNU',
      email: 'doldol@naver.com',
      category: '서비스',
      title: '샤이니도 추가해주세요!',
      status: '대기',
      createdDate: '2021-05-06 16:34',
    },
    {
      _id: 2,
      userType: 'VP',
      nickname: 'NUNUNUNU',
      email: 'anotheremail@naver.com',
      category: '서비스',
      title: '샤이니도 추가해주세요!',
      status: '대기',
      createdDate: '2021-05-06 16:34',
    },
    {
      _id: 3,
      userType: '유저',
      nickname: 'NUNUNUNU',
      email: 'doldol@naver.com',
      category: '서비스',
      title: '샤이니도 추가해주세요!',
      status: '완료',
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
            <col width="12%" />
            <col width="10%" />
            <col width="15%" />
            <col width="12%" />
            <col width="*" />
            <col width="12%" />
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
            {data.map((item, index) => {
              return (
                <TableRow
                  hover
                  key={item._id}
                  onClick={() => history.push(`${match.url}/${item._id}`)}
                >
                  <TableCell align="center" className={classes.bodyCell}>
                    {index + 1}
                  </TableCell>
                  <TableCell align="center" className={classes.bodyCell}>
                    {item.userType}
                  </TableCell>
                  <TableCell align="center" className={classes.bodyCell}>
                    {item.nickname}
                  </TableCell>
                  <TableCell align="center" className={classes.bodyCell}>
                    {item.email}
                  </TableCell>
                  <TableCell align="center" className={classes.bodyCell}>
                    {item.category}
                  </TableCell>
                  <TableCell align="center" className={classes.bodyCell}>
                    {item.title}
                  </TableCell>
                  <TableCell align="center" className={classes.bodyCell}>
                    {item.status}
                  </TableCell>
                  <TableCell align="center" className={classes.bodyCell}>
                    {item.createdDate}
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
