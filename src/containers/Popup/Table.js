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
  Button,
} from '@material-ui/core';
import { useRouteMatch, useHistory } from 'react-router';
import { Triangle } from 'react-feather';

// components
import LoadingScreen from 'components/LoadingScreen';
import Pagination from 'components/Pagination';

const th = [
  { key: 'number', label: 'NO', sortable: false },
  { key: 'appear', label: '노출순서', sortable: false },
  { key: 'title', label: '팝업명', sortable: true },
  { key: 'publishPeriod', label: '게시기간', sortable: true },
  { key: 'status', label: '등록 상태', sortable: true },
  { key: 'creator', label: '등록자', sortable: true },
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
      title: '바이브러리 첫 전시회 개최',
      publishedDateStart: '2021-05-28 15:00',
      publishedDateEnd: '2021-06-08 15:00',
      status: '활성회원',
      creator: 'admin01',
      createdDate: '2021-05-06 16:34',
    },
    {
      _id: 2,
      title: '신규 아티스트 오픈 이벤트',
      publishedDateStart: '2021-05-28 15:00',
      publishedDateEnd: '2021-06-08 15:00',
      status: '활성회원',
      creator: 'admin01',
      createdDate: '2021-05-06 16:34',
    },
    {
      _id: 3,
      title: '메인 타이틀이 노출됩니다.',
      publishedDateStart: '2021-05-28 15:00',
      publishedDateEnd: '2021-06-08 15:00',
      status: '활성회원',
      creator: 'admin01',
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
            <col width="30%" />
            <col width="20%" />
            <col width="10%" />
            <col width="10%" />
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
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-around',
                      }}
                    >
                      <Button
                        onClick={(e) => {
                          e.stopPropagation();
                          console.log('Up is clicked!');
                        }}
                      >
                        <Triangle />
                      </Button>

                      <Button
                        onClick={(e) => {
                          e.stopPropagation();
                          console.log('Down is clicked!');
                        }}
                      >
                        <Triangle className={classes.icon} />
                      </Button>
                    </div>
                  </TableCell>
                  <TableCell align="center" className={classes.bodyCell}>
                    {item.title}
                  </TableCell>
                  <TableCell align="center" className={classes.bodyCell}>
                    {item.publishedDateStart} <br /> ~{item.publishedDateEnd}
                  </TableCell>
                  <TableCell align="center" className={classes.bodyCell}>
                    {item.status}
                  </TableCell>
                  <TableCell align="center" className={classes.bodyCell}>
                    {item.creator}
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
  icon: {
    transform: 'rotate(180deg)',
  },
}));

export default TableContainer;
