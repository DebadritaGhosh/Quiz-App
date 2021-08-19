import React, { useState } from 'react';
import {
  makeStyles,
  Button,
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from '@material-ui/core';
import { useHistory } from 'react-router';

// components
import LoadingScreen from 'components/LoadingScreen';
import PasswordReset from 'components/PasswordReset';

const BasicDetails = ({ loading }) => {
  const classes = useStyles();
  const history = useHistory();
  const [open, setOpen] = useState(false);

  return (
    <>
      <Card className={classes.root}>
        {loading && <LoadingScreen />}
        <Box minWidth={700}>
          <Table>
            <colgroup>
              <col className={classes.th} />
              <col className={classes.td} />
              <col className={classes.th} />
              <col className={classes.td} />
            </colgroup>
            <TableBody>
              <TableRow>
                <TableCell align="center">ID</TableCell>
                <TableCell>admin01</TableCell>
                <TableCell align="center">비밀번호</TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    color="primary"
                    size="small"
                    onClick={() => setOpen(true)}
                  >
                    재설정
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell align="center" className={classes.th}>
                  사용자명
                </TableCell>
                <TableCell>홍길동</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={classes.th}>
                  이메일 주소
                </TableCell>
                <TableCell>wejiorfsdi@naver.com</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Box>
      </Card>
      <Box display="flex" flexDirection="row" justifyContent="flex-end" pt={1}>
        <Button
          variant="contained"
          color="primary"
          style={{ width: 150 }}
          onClick={() => {
            history.push('/my-info/edit');
          }}
        >
          수정
        </Button>
      </Box>
      <PasswordReset open={open} setOpen={setOpen} />
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    marginTop: theme.spacing(3),
  },
  th: {
    width: '15%',
    backgroundColor: theme.palette.action.focus,
  },
  td: {
    width: '35%',
  },
}));

export default BasicDetails;
