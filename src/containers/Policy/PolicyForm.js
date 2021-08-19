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
  Paper,
} from '@material-ui/core';
import { KeyboardDatePicker } from '@material-ui/pickers';
// components
import LoadingScreen from 'components/LoadingScreen';
import FormComponents from 'components/Form';
import QuillEditor from 'components/QuillEditor';

const classificationOptions = [
  { label: '이용약관', value: 'termsConditions' },
  { label: '개인정보처리방침', value: 'privacyPolicy' },
];

const PolicyForm = ({ loading, form, changeForm }) => {
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
                  방침 구분<span className={classes.redStar}>*</span>
                </TableCell>
                <TableCell>
                  <FormComponents.Select
                    fullWidth={true}
                    options={classificationOptions}
                    variant="outlined"
                    name="classification"
                    value={form.classification}
                    onChange={changeForm}
                  />
                </TableCell>
                <TableCell align="center">
                  시행일자<span className={classes.redStar}>*</span>
                </TableCell>
                <TableCell>
                  <KeyboardDatePicker
                    format="YYYY-MM-DD"
                    name="publishDate"
                    inputVariant="outlined"
                    value={form.publishDate}
                    onChange={(date) => changeForm('publishDate', date)}
                  />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell align="center" className={classes.th}>
                  내용(국문)<span className={classes.redStar}>*</span>
                </TableCell>
                <TableCell>
                  <Paper component={Box} mt={1}>
                    <QuillEditor
                      className={classes.editor}
                      value={form.detailsKor}
                      onChange={(value) => changeForm('detailsKor', value)}
                    />
                  </Paper>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={classes.th}>
                  내용(영문)<span className={classes.redStar}>*</span>
                </TableCell>
                <TableCell>
                  <Paper component={Box} mt={1}>
                    <QuillEditor
                      className={classes.editor}
                      value={form.detailsEng}
                      onChange={(value) => changeForm('detailsEng', value)}
                    />
                  </Paper>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={classes.th}>
                  개정 사유(국문)<span className={classes.redStar}>*</span>
                </TableCell>
                <TableCell>
                  <TextField
                    fullWidth
                    variant="outlined"
                    name="reasonKor"
                    value={form.reasonKor}
                    onChange={(e) => changeForm(e.target.name, e.target.value)}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={classes.th}>
                  개정 사유(영문)<span className={classes.redStar}>*</span>
                </TableCell>
                <TableCell>
                  <TextField
                    fullWidth
                    variant="outlined"
                    name="reasonEng"
                    value={form.reasonEng}
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
  editor: {
    padding: 2,
    '& .ql-editor': {
      maxWidth: '100%',
      minHeight: 150,
      overflowWrap: 'break-word',
      wordWrap: 'break-word',
      hyphens: 'auto',
    },
  },
  redStar: {
    fontSize: 16,
    color: 'red',
  },
}));

export default PolicyForm;
