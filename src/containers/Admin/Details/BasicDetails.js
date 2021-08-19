import React, { useState, useEffect } from 'react';
import {
  makeStyles,
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Button,
} from '@material-ui/core';
import { useParams, useHistory } from 'react-router';
import axios from 'axios';
// components
import LoadingScreen from 'components/LoadingScreen';
import PasswordReset from 'components/PasswordReset';

const BasicDetails = () => {
  const classes = useStyles();
  const history = useHistory();
  const { _id } = useParams();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetchArticle();
  }, []);

  const fetchArticle = () => {
    setLoading(true);
    axios
      .get(`/user/${_id}`)
      .then(({ data }) => {
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

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
                <TableCell className={classes.td}>admin01</TableCell>
                <TableCell align="center" className={classes.th}>
                  비밀번호
                </TableCell>
                <TableCell className={classes.td}>
                  <Button
                    variant="outlined"
                    color="secondary"
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
              <TableRow>
                <TableCell align="center" className={classes.th}>
                  등록일시
                </TableCell>
                <TableCell>YYYY-MM-DD hh:mm</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Box>
      </Card>
      <PasswordReset open={open} setOpen={setOpen} />
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
}));

export default BasicDetails;
