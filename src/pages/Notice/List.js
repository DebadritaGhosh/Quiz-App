import React, { useState } from 'react';
import axios from 'axios';
import {
  Container,
  Box,
  makeStyles,
  Typography,
  Button,
} from '@material-ui/core';
import { useHistory } from 'react-router';

// containers
import NoticeContainers from 'containers/Notice';

// components
import Page from 'components/Page';
import ManageCategory from 'components/ManageCategory';

// hooks
import useForm from 'hooks/useForm';
import usePagination from 'hooks/usePagination';

// utils
import { queryStringMaker } from 'utils';

const List = () => {
  const classes = useStyles();
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const filter = useForm({
    orderBy: 'createdDate',
    sort: 'desc',
    createdAtStart: '',
    createdAtEnd: '',
    category: '1',
    keyword: '',
  });
  const pagination = usePagination(() => {
    const filterObject = {
      limit: pagination.limit,
      skip: pagination.skip,
      orderBy: filter.form.orderBy,
      sort: filter.form.sort,
    };

    const queryString = queryStringMaker(filterObject);

    pagination.setLoading(true);
    axios
      .get(`/admin?${queryString}`)
      .then(({ data }) => {
        pagination.setTotalCount(data.totalCount);
        pagination.setItems(data.items);
        pagination.setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        pagination.setLoading(false);
      });
  }, [filter.form.orderBy, filter.form.sort]);

  return (
    <Page className={classes.root} title="공지사항">
      <Container maxWidth={false}>
        <Typography variant="h3" color="textPrimary">
          공지사항
        </Typography>
        <NoticeContainers.Filter pagination={pagination} filter={filter} />
        <Box mt={3}>
          <Box className={classes.buttons} pt={1}>
            <Button variant="outlined" color="primary">
              엑셀 다운로드
            </Button>
            <div className={classes.buttons2}>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => setOpen(true)}
              >
                카테고리 설정
              </Button>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => history.push('/notice/register')}
              >
                신규등록
              </Button>
            </div>
          </Box>
          <NoticeContainers.Table pagination={pagination} filter={filter} />
        </Box>
      </Container>
      <ManageCategory
        title="공지사항 카테고리 설정"
        open={open}
        setOpen={setOpen}
      />
    </Page>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(1),
  },
  buttons2: {
    '& > button': {
      marginLeft: theme.spacing(1),
      width: 120,
    },
  },
}));

export default List;
