import React from 'react';
import {
  makeStyles,
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TextareaAutosize,
  Button,
} from '@material-ui/core';
// components
import LoadingScreen from 'components/LoadingScreen';

const RespondForm = ({ loading, form, changeForm }) => {
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
                  관리자 답변
                </TableCell>
                <TableCell className={classes.container}>
                  <TextareaAutosize
                    className={classes.textarea}
                    variant="outlined"
                    rowsMin={3}
                    rowsMax={5}
                    maxLength={100}
                    name="answer"
                    value={form.answer}
                    onChange={(e) => changeForm('answer', e.target.value)}
                  />
                  <div className={classes.button}>
                    <Button
                      variant="contained"
                      color="default"
                      style={{ height: 35 }}
                      onClick={() => alert('Responded!')}
                    >
                      등록
                    </Button>
                  </div>
                </TableCell>
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
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    marginTop: theme.spacing(2),
  },
  th: {
    width: '15%',
    backgroundColor: theme.palette.action.focus,
  },
  td: {
    width: '35%',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  textarea: {
    padding: 10,
    width: '100%',
    fontSize: 16,
    background: theme.palette.background.paper,
    color: theme.palette.text.primary,
    resize: 'none',
  },
  button: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 10,
    justifyContent: 'flex-end',
  },
}));

export default RespondForm;
