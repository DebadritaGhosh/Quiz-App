import React from 'react';
import {
  makeStyles,
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Button,
  TextField,
} from '@material-ui/core';

// components
import ModalContainer from 'components/ModalContainer';

const PasswordReset = ({ open, setOpen, form, changeForm }) => {
  const classes = useStyles();

  return (
    <ModalContainer
      modalTitle="비밀번호 재설정"
      open={open}
      onClose={() => setOpen(false)}
    >
      <div className={classes.container}>
        <Card>
          <Box minWidth={700}>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell align="center" className={classes.th2}>
                    새 비밀번호 <span className={classes.redStar}>*</span>
                  </TableCell>
                  <TableCell>
                    <TextField
                      className={classes.textField}
                      variant="outlined"
                      name="reason"
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center" className={classes.th2}>
                    비밀번호 확인 <span className={classes.redStar}>*</span>
                  </TableCell>
                  <TableCell>
                    <TextField
                      className={classes.textField}
                      variant="outlined"
                      name="reason"
                    />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Box>
        </Card>
        <Box
          display="flex"
          justifyContent="space-between"
          className={classes.buttons}
        >
          <Button
            variant="contained"
            size="small"
            onClick={() => setOpen(false)}
          >
            {'취소'}
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={() => alert('비밀번호가 변경되었습니다.')}
          >
            {'저장'}
          </Button>
        </Box>
      </div>
    </ModalContainer>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  },
  th2: {
    width: '30%',
    backgroundColor: theme.palette.action.focus,
  },
  textField: {
    width: 500,
  },
  buttons: {
    marginTop: 10,
    marginBottom: 10,
    '& > button': {
      margin: theme.spacing(0.5),
      width: 100,
    },
  },
  redStar: {
    fontSize: 18,
    color: 'red',
  },
}));

export default PasswordReset;
