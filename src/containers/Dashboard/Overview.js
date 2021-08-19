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
  Typography,
} from '@material-ui/core';
import { useHistory } from 'react-router';

const th = [
  { key: 'vp', label: 'VP 신청 승인대기' },
  { key: 'qna', label: 'Q&A 답변 대기' },
  { key: 'registeredUsers', label: '지난 일주일간 신규 가입자수' },
  { key: 'contentUploads', label: '지난 일주일간 콘텐츠 업로드 수' },
];

const Overview = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Card className={classes.root}>
      <Box minWidth={700}>
        <Table>
          <colgroup>
            <col width="25%" />
            <col width="25%" />
            <col width="25%" />
            <col width="25%" />
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
                    <Typography variant="h5">{item.label}</Typography>
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell
                align="center"
                className={classes.bodyCellWithHover}
                onClick={() => history.push(`/vp`)}
              >
                <Typography variant="h2">{3} 건</Typography>
              </TableCell>
              <TableCell
                align="center"
                className={classes.bodyCellWithHover}
                onClick={() => history.push(`/qna`)}
              >
                <Typography variant="h2">{27} 건</Typography>
              </TableCell>
              <TableCell align="center" className={classes.bodyCell}>
                <Typography variant="h2">{57} 명</Typography>
              </TableCell>
              <TableCell align="center" className={classes.bodyCell}>
                <Typography variant="h2">{'1,624'} 장</Typography>
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
  bodyCellWithHover: {
    height: 75,
    borderRightStyle: 'solid',
    borderRightColor: theme.palette.action.focus,
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    '&:hover': {
      background: '#969799',
      cursor: 'pointer',
    },
  },
  bodyCell: {
    height: 75,
    borderRightStyle: 'solid',
    borderRightColor: theme.palette.action.focus,
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
}));

export default Overview;
