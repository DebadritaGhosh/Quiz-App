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
import ImageUpload from 'components/ImageUpload';

const GroupForm = ({ loading, form, changeForm, image, setImage }) => {
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
                <TableCell align="center">그룹명(국문)</TableCell>
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
                  그룹명(영문)<span className={classes.redStar}>*</span>
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
            </TableBody>
          </Table>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell align="center" className={classes.th}>
                  이미지<span className={classes.redStar}>*</span>
                </TableCell>
                <TableCell>
                  <ImageUpload image={image} setImage={setImage} />
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

export default GroupForm;
