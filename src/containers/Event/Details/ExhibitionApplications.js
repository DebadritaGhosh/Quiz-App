import React, { useState } from 'react';
import {
  makeStyles,
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Link,
  Button,
} from '@material-ui/core';
import { useHistory } from 'react-router';

// components
import LoadingScreen from 'components/LoadingScreen';
import ConfirmModal from 'components/ConfirmModal';

const th = [
  { key: 'no', label: 'NO' },
  { key: 'id', label: 'ID' },
  { key: 'nickname', label: '닉네임' },
  { key: 'artist', label: '아티스트' },
  { key: 'mileage', label: '마일리지' },
  { key: 'applicationDate', label: '신청일시' },
  { key: 'cancelStatus', label: '취소 상태' },
];

const ExhibitionApplications = ({ loading }) => {
  const classes = useStyles();
  const history = useHistory();
  const [open, setOpen] = useState(false);

  return (
    <>
      <Card className={classes.root}>
        {loading && <LoadingScreen />}
        <Box minWidth={700}>
          <Table className={classes.table}>
            <colgroup>
              <col width="5%" />
              <col width="10%" />
              <col width="10%" />
              <col width="10%" />
              <col width="10%" />
              <col width="15%" />
              <col width="10%" />
            </colgroup>
            <TableHead className={classes.th}>
              <TableRow>
                {th.map((item) => {
                  return (
                    <TableCell
                      key={item.key}
                      className={classes.tableCell}
                      align="center"
                    >
                      {item.label}
                    </TableCell>
                  );
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell align="center" className={classes.cell}>
                  {'1'}
                </TableCell>
                <TableCell align="center" className={classes.cell}>
                  <Link
                    component="button"
                    onClick={() => history.push(`/vp/${1}`)}
                  >
                    {'dkssud137'}
                  </Link>
                </TableCell>
                <TableCell align="center" className={classes.cell}>
                  {'방탄천사'}
                </TableCell>
                <TableCell align="center" className={classes.cell}>
                  {'방탄소년단'}
                </TableCell>
                <TableCell align="center" className={classes.cell}>
                  {'25,000'}
                </TableCell>
                <TableCell align="center" className={classes.cell}>
                  {'YYYY-MM-DD hh:mm'}
                </TableCell>
                <TableCell align="center" className={classes.cell}>
                  <Button
                    color="primary"
                    style={{ fontSize: 16 }}
                    onClick={() => setOpen(true)}
                  >
                    {'취소 처리'}
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Box>
      </Card>
      <ConfirmModal
        primaryText="해당 VP의 이벤트 신청 내역을 취소 처리하시겠습니까? 차감된 마일리지는 원복되지 않습니다."
        open={open}
        onClose={() => setOpen(false)}
        onApply={() => alert('취소 처리되었습니다.')}
      />
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    // marginTop: theme.spacing(2),
  },
  title: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
  },
  table: {
    tableLayout: 'fixed',
  },
  th: {
    backgroundColor: theme.palette.action.focus,
  },
  cell: {
    borderRightStyle: 'solid',
    borderRightColor: theme.palette.action.focus,
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
  tableCell: {
    borderRightStyle: 'solid',
    borderRightColor: theme.palette.action.focus,
  },
}));

export default ExhibitionApplications;
