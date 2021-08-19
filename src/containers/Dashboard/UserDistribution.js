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
  { key: 'no', label: 'No.' },
  { key: 'country', label: '국가명' },
  { key: 'userCount', label: '사용자수' },
  { key: 'userPercentage', label: '비율' },
];

const UserDistribution = () => {
  const classes = useStyles();
  const history = useHistory();

  const tableData = [
    {
      no: 1,
      country: '대한민국',
      userCount: '459',
      userPercentage: 28.76,
    },
    {
      no: 2,
      country: '일본',
      userCount: '162',
      userPercentage: 10.15,
    },
    {
      no: 3,
      country: '대만',
      userCount: '127',
      userPercentage: 7.96,
    },
    {
      no: 4,
      country: '미국',
      userCount: '103',
      userPercentage: 6.45,
    },
    {
      no: 5,
      country: '영국',
      userCount: '86',
      userPercentage: 3.51,
    },
  ];

  return (
    <>
      <Typography variant="h3" color="textPrimary" className={classes.title}>
        {'사용자 가입 분포 >'}
      </Typography>
      <div className={classes.container}>
        <Card className={classes.map}></Card>
        <Card className={classes.table}>
          <Box minWidth={250}>
            <Table>
              <colgroup>
                <col width="5%" />
                <col width="15%" />
                <col width="15%" />
                <col width="10%" />
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
                {tableData.map((item) => {
                  return (
                    <TableRow key={item.no}>
                      <TableCell align="center" className={classes.bodyCell}>
                        <Typography variant="h5">{item.no}</Typography>
                      </TableCell>
                      <TableCell align="center" className={classes.bodyCell}>
                        <Typography variant="h5">{item.country}</Typography>
                      </TableCell>
                      <TableCell align="center" className={classes.bodyCell}>
                        <Typography variant="h5">{item.userCount}</Typography>
                      </TableCell>
                      <TableCell align="center" className={classes.bodyCell}>
                        <Typography variant="h5">
                          {item.userPercentage} %
                        </Typography>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </Box>
        </Card>
      </div>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: theme.spacing(1),
  },
  map: {
    width: '50%',
    height: 400,
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  table: {
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(1),
    width: '50%',
    height: 400,
  },

  headRow: { backgroundColor: theme.palette.action.focus },
  headCell: {
    borderRightStyle: 'solid',
    borderRightColor: theme.palette.action.focus,
  },
  bodyCell: {
    height: 70,
    borderRightStyle: 'solid',
    borderRightColor: theme.palette.action.focus,
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
}));

export default UserDistribution;
