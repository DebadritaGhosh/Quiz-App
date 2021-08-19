import React from 'react';
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
import AdminContainer from 'containers/Admin';

// components
import Page from 'components/Page';

// hooks
import useForm from 'hooks/useForm';
import usePagination from 'hooks/usePagination';

// utils
import { queryStringMaker } from 'utils';

const List = () => {
  const classes = useStyles();
  const history = useHistory();
  const filter = useForm({
    orderBy: 'createdAt',
    sort: 'desc',
    createdAtStart: '',
    createdAtEnd: '',
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
    <Page className={classes.root} title="운영진 관리">
      <Container maxWidth={false}>
        <Typography variant="h3" color="textPrimary">
          운영진 관리
        </Typography>
        <Box mt={3}>
          <AdminContainer.Filter pagination={pagination} filter={filter} />
          <Box className={classes.buttons} pt={1}>
            <Button variant="outlined" color="primary">
              엑셀 다운로드
            </Button>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => history.push('/admin/register')}
            >
              신규등록
            </Button>
          </Box>

          <AdminContainer.Table pagination={pagination} filter={filter} />
        </Box>
      </Container>
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
    '& > button': {
      margin: theme.spacing(0.5),
    },
  },
}));

export default List;
