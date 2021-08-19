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
  InputAdornment,
} from '@material-ui/core';
// components
import LoadingScreen from 'components/LoadingScreen';

const HairColorForm = ({ loading, form, changeForm }) => {
  const classes = useStyles();

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
                <TableCell align="center">
                  컬러명(국문)<span className={classes.redStar}>*</span>
                </TableCell>
                <TableCell>
                  <TextField
                    fullWidth={true}
                    variant="outlined"
                    name="nameKor"
                    value={form.nameKor}
                    onChange={(e) => changeForm(e.target.name, e.target.value)}
                  />
                </TableCell>
                <TableCell align="center">
                  컬러명(영문)<span className={classes.redStar}>*</span>
                </TableCell>
                <TableCell>
                  <TextField
                    fullWidth={true}
                    variant="outlined"
                    name="nameEng"
                    value={form.nameEng}
                    onChange={(e) => changeForm(e.target.name, e.target.value)}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">
                  컬러코드(국문)<span className={classes.redStar}>*</span>
                </TableCell>
                <TableCell>
                  <TextField
                    fullWidth={true}
                    variant="outlined"
                    name="colorCode"
                    value={form.colorCode}
                    onChange={(e) => changeForm(e.target.name, e.target.value)}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">#</InputAdornment>
                      ),
                    }}
                  />
                </TableCell>
                <TableCell align="center">컬러표시</TableCell>
                <TableCell>
                  <div
                    className={classes.colorPreview}
                    style={{ backgroundColor: '#' + form.colorCode }}
                  ></div>
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
  colorPreview: {
    height: '30px',
    width: '80px',
  },
  redStar: {
    fontSize: 18,
    color: 'red',
  },
}));

export default HairColorForm;
