import React from 'react';
import {
  makeStyles,
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TextField,
} from '@material-ui/core';
// components
import LoadingScreen from 'components/LoadingScreen';

const BasicDetails = ({ loading, form, changeForm }) => {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.root}>
        {loading && <LoadingScreen />}
        <Box minWidth={700}>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell align="center" className={classes.th}>
                  ID <span className={classes.redStar}>*</span>
                </TableCell>
                <TableCell>
                  <TextField
                    className={classes.textField}
                    variant="outlined"
                    name="id"
                    value={form.id}
                    onChange={(e) => changeForm(e.target.name, e.target.value)}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={classes.th}>
                  비밀번호 <span className={classes.redStar}>*</span>
                </TableCell>
                <TableCell>
                  <TextField
                    className={classes.textField}
                    variant="outlined"
                    name="password"
                    value={form.password}
                    onChange={(e) => changeForm(e.target.name, e.target.value)}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={classes.th}>
                  비밀번호 확인 <span className={classes.redStar}>*</span>
                </TableCell>
                <TableCell>
                  <TextField
                    className={classes.textField}
                    variant="outlined"
                    name="passwordConfirm"
                    value={form.passwordConfirm}
                    onChange={(e) => changeForm(e.target.name, e.target.value)}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={classes.th}>
                  사용자명 <span className={classes.redStar}>*</span>
                </TableCell>
                <TableCell>
                  <TextField
                    className={classes.textField}
                    variant="outlined"
                    name="username"
                    value={form.username}
                    onChange={(e) => changeForm(e.target.name, e.target.value)}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={classes.th}>
                  이메일 주소 <span className={classes.redStar}>*</span>
                </TableCell>
                <TableCell>
                  <TextField
                    className={classes.textField}
                    variant="outlined"
                    name="email"
                    value={form.email}
                    onChange={(e) => changeForm(e.target.name, e.target.value)}
                  />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Box>
      </Card>
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
  textField: {
    width: 350,
  },
  redStar: {
    fontSize: 18,
    color: 'red',
  },
}));

export default BasicDetails;
