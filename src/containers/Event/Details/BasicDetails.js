import React, { useState } from 'react';
import {
  makeStyles,
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Button,
  Typography,
} from '@material-ui/core';
// components
import LoadingScreen from 'components/LoadingScreen';
import ConfirmModal from 'components/ConfirmModal';

const BasicDetails = ({ loading }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const status = '모집완료';

  return (
    <>
      <Card className={classes.root}>
        {loading && <LoadingScreen />}
        <Box minWidth={700}>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell align="center" className={classes.th}>
                  혜택구분
                </TableCell>
                <TableCell className={classes.td}>컵홀더 이벤트</TableCell>
                <TableCell align="center" className={classes.th}>
                  진행 상태
                </TableCell>
                <TableCell className={classes.td}>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Typography>등록</Typography>
                    {status === '모집완료' && (
                      <Button
                        variant="outlined"
                        color="secondary"
                        size="madium"
                        style={{ width: 150 }}
                        onClick={() => setOpen(true)}
                      >
                        종료 처리
                      </Button>
                    )}
                  </Box>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell align="center" className={classes.th}>
                  신청기간
                </TableCell>
                <TableCell>YYYY-MM-DD hh:mm ~ YYYY-MM-DD hh:mm</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={classes.th}>
                  신청조건
                </TableCell>
                <TableCell>5,000 마일리지</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={classes.th}>
                  모집인원
                </TableCell>
                <TableCell>2</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={classes.th}>
                  이벤트 유의사항(국문)
                </TableCell>
                <TableCell>컵홀더 이벤트 유의사항이 노출됩니다!</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={classes.th}>
                  이벤트 유의사항(영문)
                </TableCell>
                <TableCell>Event notes are exposed!</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell align="center" className={classes.th}>
                  등록자
                </TableCell>
                <TableCell className={classes.td}>admin01</TableCell>
                <TableCell align="center" className={classes.th}>
                  등록일시
                </TableCell>
                <TableCell className={classes.td}>YYYY-MM-DD hh:mm</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={classes.th}>
                  수정자
                </TableCell>
                <TableCell className={classes.td}>admin02</TableCell>
                <TableCell align="center" className={classes.th}>
                  수정일시
                </TableCell>
                <TableCell className={classes.td}>YYYY-MM-DD hh:mm</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Box>
      </Card>
      <ConfirmModal
        primaryText="해당 이벤트를 종료 처리하시겠습니까? 실제 오프라인 이벤트 종료 시에 설정해주세요"
        open={open}
        onClose={() => setOpen(false)}
        onApply={() => alert('이벤트가 종료 처리되었습니다.')}
      />
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
  },
  th: {
    width: '15%',
    backgroundColor: theme.palette.action.focus,
  },
  td: {
    width: '35%',
  },
  container: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  },
}));

export default BasicDetails;
