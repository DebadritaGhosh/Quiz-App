import React from 'react';
import axios from 'axios';
import { Container, Box, makeStyles, Typography } from '@material-ui/core';

// containers
import UserContainers from 'containers/User';

// components
import Page from 'components/Page';

// hooks
import useForm from 'hooks/useForm';
import usePagination from 'hooks/usePagination';

// utils
import { queryStringMaker } from 'utils';

const List = () => {
  const classes = useStyles();
  const filter = useForm({
    orderBy: 'createdDate',
    sort: 'desc',
    searchType: 'createdDate',
    searchTerm: '',
    status: 'active',
    createdAtStart: '',
    createdAtEnd: '',
  });
  const pagination = usePagination(() => {
    const filterObject = {
      limit: pagination.limit,
      skip: pagination.skip,
      orderBy: filter.form.orderBy,
      sort: filter.form.sort,
    };

    if (pagination.filter.searchType)
      filterObject.searchType = pagination.filter.searchType;
    if (pagination.filter.searchTerm)
      filterObject.searchTerm = pagination.filter.searchTerm;
    if (pagination.filter.status)
      filterObject.status = pagination.filter.status;

    const queryString = queryStringMaker(filterObject);

    pagination.setLoading(true);
    axios
      .get(`/user?${queryString}`)
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
    <Page className={classes.root} title="회원관리">
      <Container maxWidth={false}>
        <Typography variant="h3" color="textPrimary">
          회원관리
        </Typography>
        <Box mt={3}>
          <UserContainers.Filter pagination={pagination} filter={filter} />
          <UserContainers.Table pagination={pagination} filter={filter} />
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
}));

export default List;
