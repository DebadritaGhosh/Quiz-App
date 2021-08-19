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
import FormComponents from 'components/Form';

// hooks
import useForm from 'hooks/useForm';
import useAuthority from 'hooks/useAuthority';

// utils
import { dateTimePrettier } from 'utils';

const Article = () => {
  const classes = useStyles();
  const history = useHistory();
  const { _id } = useParams();
  const [loading, setLoading] = useState(false);
  const { form, changeForm, changeFormValues } = useForm({
    title: '',
    content: '',
    isPublic: false,
    createdAt: '',
    existImage: [],
    deleteImage: [],
    image: [],
  });
  const isUpload = _id === 'upload';
  const enableEdit = useAuthority('m');
  const enableWrite = useAuthority('w');
  const disabled = isUpload ? !enableWrite : !enableEdit;

  useEffect(() => {
    if (!isUpload) {
      fetchArticle();
    }
  }, []);

  const fetchArticle = () => {
    setLoading(true);
    axios
      .get(`/notice/${_id}`)
      .then(({ data }) => {
        changeFormValues({
          title: data.title,
          content: data.content,
          isPublic: data.isPublic === 1,
          existImage: data.image ? data.image.split('&') : [],
          createdAt: data.createdAt,
        });
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const handleSubmit = () => {
    if (isUpload) {
      if (window.confirm('등록하시겠습니까?')) {
        axios
          .post('/notice', {
            title: form.title,
            content: form.content,
            isPublic: form.isPublic,
            image: form.image,
          })
          .then((res) => {
            alert('등록되었습니다.');
            history.replace('/notice');
          })
          .catch((err) => {
            alert('에러가 발생하였습니다.');
            console.log(err);
          });
      }
    } else {
      if (window.confirm('수정하시겠습니까?')) {
        axios
          .patch(`/notice/${_id}`, {
            title: form.title,
            content: form.content,
            isPublic: form.isPublic,
            image: form.image,
            deleteImage: form.deleteImage,
          })
          .then((res) => {
            alert('수정되었습니다.');
            history.replace('/notice');
          })
          .catch((err) => {
            alert('에러가 발생하였습니다.');
            console.log(err);
          });
      }
    }
  };

  const handleDelete = () => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      axios
        .delete(`/notice/${_id}`)
        .then((res) => {
          alert('삭제되었습니다.');
          history.replace('/notice');
        })
        .catch((err) => {
          alert('에러가 발생하였습니다.');
          console.log(err);
        });
    }
  };

  return (
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
              <TableCell align="center">제목</TableCell>
              <TableCell>
                <FormComponents.TextField
                  disabled={disabled}
                  onChange={changeForm}
                  name="title"
                  value={form.title}
                />
              </TableCell>
              <TableCell align="center">공개여부</TableCell>
              <TableCell>
                <FormComponents.Checkbox
                  disabled={disabled}
                  onChange={changeForm}
                  name="isPublic"
                  value={form.isPublic}
                />
              </TableCell>
            </TableRow>
            {!isUpload && (
              <TableRow>
                <TableCell align="center">등록일</TableCell>
                <TableCell colSpan="3">
                  {dateTimePrettier(form.createdAt)}
                </TableCell>
              </TableRow>
            )}
            <TableRow>
              <TableCell align="center">내용</TableCell>
              <TableCell colSpan="3">
                <FormComponents.DraftEditor
                  useHtml
                  disabled={disabled}
                  initializeFlag={loading}
                  onChange={changeForm}
                  name="content"
                  value={form.content}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">이미지</TableCell>
              <TableCell colSpan="3">
                <FormComponents.Upload
                  limit={3}
                  disabled={disabled}
                  onChange={changeForm}
                  onChangeValues={changeFormValues}
                  existName="existImage"
                  deleteName="deleteImage"
                  name="image"
                  existValue={form.existImage}
                  deleteValue={form.deleteImage}
                  value={form.image}
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>
      <Box
        className={classes.buttons}
        display="flex"
        justifyContent="center"
        alignItems="center"
        p={1}
      >
        {enableEdit && (
          <>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              onClick={handleSubmit}
            >
              {isUpload ? '저장' : '수정'}
            </Button>
            {!isUpload && (
              <Button
                variant="contained"
                color="primary"
                onClick={handleDelete}
              >
                삭제
              </Button>
            )}
          </>
        )}

        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            history.push('/notice');
          }}
        >
          목록
        </Button>
      </Box>
    </Card>
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
  buttons: {
    '& > button': {
      margin: theme.spacing(0.5),
    },
  },
}));

export default Article;
