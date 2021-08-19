import React from 'react';
import {
  makeStyles,
  Button,
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

const EditContainer = ({ loading, form, changeForm }) => {
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
                  ID
                </TableCell>
                <TableCell>admin01</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell align="center" className={classes.th}>
                  사용자명 <span className={classes.redStar}>*</span>
                </TableCell>
                <TableCell>
                  <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    name="userName"
                    value={form.userName}
                    onChange={(e) => changeForm(e.target.name, e.target.value)}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={classes.th}>
                  이메일 주소<span className={classes.redStar}>*</span>
                </TableCell>
                <TableCell>
                  <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
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
      <Box display="flex" flexDirection="row" justifyContent="flex-end" pt={1}>
        <Button
          variant="contained"
          color="primary"
          style={{ width: 150 }}
          onClick={() => {
            console.log(form);
          }}
        >
          저장
        </Button>
      </Box>
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
  redStar: {
    fontSize: 18,
    color: 'red',
  },
}));

export default EditContainer;
