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
  { key: 'nickname', label: 'VP 닉네임', sortable: false },
  { key: 'upload', label: '콘텐츠 업로드', sortable: false },
  { key: 'myAlbum', label: '마이앨범 담기', sortable: false },
  { key: 'download', label: '다운로드', sortable: false },
  { key: 'like', label: '좋아요', sortable: false },
];

const TableContainer = ({ pagination, filter }) => {
  const classes = useStyles();

  const data = [
    {
      no: '1',
      nickname: '슈가어택',
      upload: '186',
      myAlbum: 12,
      download: 3,
      like: 1532,
    },
    {
      no: '2',
      nickname: 'MELROSE',
      upload: '132',
      myAlbum: 12,
      download: 3,
      like: 1532,
    },
    {
      no: '3',
      nickname: '도토리물만두',
      upload: '126',
      myAlbum: 12,
      download: 3,
      like: 1532,
    },
    {
      no: '4',
      nickname: '슈가어택',
      upload: '186',
      myAlbum: 12,
      download: 3,
      like: 1532,
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
            <col width="15%" />
            <col width="15%" />
            <col width="15%" />
            <col width="15%" />
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
                    {item.nickname}
                  </TableCell>
                  <TableCell align="center" className={classes.bodyCell}>
                    {item.upload}
                  </TableCell>
                  <TableCell align="center" className={classes.bodyCell}>
                    {item.myAlbum}
                  </TableCell>
                  <TableCell align="center" className={classes.bodyCell}>
                    {item.download}
                  </TableCell>
                  <TableCell align="center" className={classes.bodyCell}>
                    {item.like}
                  </TableCell>
                </TableRow>
              );
            })}
            <TableRow className={classes.headRow}>
              <TableCell></TableCell>
              <TableCell align="left" className={classes.bodyCell}>
                {'합계'}
              </TableCell>
              <TableCell align="center" className={classes.bodyCell}>
                {716}
              </TableCell>
              <TableCell align="center" className={classes.bodyCell}>
                {2516}
              </TableCell>
              <TableCell align="center" className={classes.bodyCell}>
                {1679}
              </TableCell>
              <TableCell align="center" className={classes.bodyCell}>
                {3520}
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
