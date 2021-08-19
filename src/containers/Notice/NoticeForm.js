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
// components
import LoadingScreen from 'components/LoadingScreen';
import FormComponents from 'components/Form';
import QuillEditor from 'components/QuillEditor';

const categoryOptions = [
  { label: '공지', value: 'notice' },
  { label: '소식지', value: 'newsletter' },
  { label: '뉴스', value: 'news' },
];

const NoticeForm = ({ loading, form, changeForm }) => {
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
                  카테고리<span className={classes.redStar}>*</span>
                </TableCell>
                <TableCell>
                  <FormComponents.Select
                    fullWidth={true}
                    options={categoryOptions}
                    variant="outlined"
                    name="category"
                    value={form.category}
                    onChange={changeForm}
                  />
                </TableCell>
                <TableCell align="center">대상</TableCell>
                <TableCell>{form.target}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell align="center" className={classes.th}>
                  제목(국문)<span className={classes.redStar}>*</span>
                </TableCell>
                <TableCell>
                  <TextField
                    fullWidth
                    variant="outlined"
                    name="titleKor"
                    value={form.titleKor}
                    onChange={(e) => changeForm(e.target.name, e.target.value)}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={classes.th}>
                  제목(영문)<span className={classes.redStar}>*</span>
                </TableCell>
                <TableCell>
                  <TextField
                    fullWidth
                    variant="outlined"
                    name="titleEng"
                    value={form.titleEng}
                    onChange={(e) => changeForm(e.target.name, e.target.value)}
                  />
                </TableCell>
              </TableRow>
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
    fontSize: 18,
    color: 'red',
  },
}));

export default NoticeForm;
