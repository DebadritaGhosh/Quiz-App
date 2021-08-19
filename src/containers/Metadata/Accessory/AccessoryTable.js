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

// utils
import { dateTimePrettier } from 'utils';

const th = [
  { key: 'No', label: 'No', sortable: false },
  { key: 'exposure', label: '노출순서', sortable: false },
  { key: 'nameKor', label: '액세서리명(국문)', sortable: true },
  { key: 'nameEng', label: '액세서리명(영문)', sortable: true },
  { key: 'creator', label: '등록자', sortable: true },
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
      artistType: '그룹',
      nameKor: '안경',
      nameEng: 'Glasses',
      creator: 'admin01',
      createdDate: '2021-05-06 16:34',
    },
    {
      _id: 2,
      artistType: '그룹',
      nameKor: '모자',
      nameEng: 'Hat',
      creator: 'admin01',
      createdDate: '2021-05-06 16:34',
    },
    {
      _id: 3,
      artistType: '그룹',
      nameKor: '화관',
      nameEng: 'Corolla',
      creator: 'admin01',
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
            <col width="15%" />
            <col width="15%" />
            <col width="15%" />
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
                  key={item._id}
                  hover
                  onClick={() =>
                    history.push(`${match.url}/accessory/${item._id}`)
                  }
                >
                  <TableCell className={classes.bodyCell} align="center">
                    {index + 1}
                  </TableCell>
                  <TableCell className={classes.bodyCell} align="center">
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
                  <TableCell className={classes.bodyCell} align="center">
                    {item.nameKor}
                  </TableCell>
                  <TableCell className={classes.bodyCell} align="center">
                    {item.nameEng}
                  </TableCell>

                  <TableCell className={classes.bodyCell} align="center">
                    {item.creator}
                  </TableCell>
                  <TableCell className={classes.bodyCell} align="center">
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
  icon: {
    transform: 'rotate(180deg)',
  },
}));

export default TableContainer;
