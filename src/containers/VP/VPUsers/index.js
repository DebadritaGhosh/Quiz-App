import React from 'react';
import axios from 'axios';
import { Box, makeStyles } from '@material-ui/core';
// containers
import VPFilter from './VPFilter';
import VPTable from './VPTable';
// hooks
import useForm from 'hooks/useForm';
import usePagination from 'hooks/usePagination';
// utils
import { queryStringMaker } from 'utils';

const VPUsers = () => {
  const classes = useStyles();
  const filter = useForm({
    orderBy: 'createdDate',
    sort: 'desc',
    searchType: 'createdDate',
    searchTerm: '',
    artist: '',
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
    if (pagination.filter.gender)
      filterObject.gender = pagination.filter.gender;

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
    <Box>
      <VPFilter pagination={pagination} filter={filter} />
      <VPTable pagination={pagination} filter={filter} />
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
  },
}));

export default VPUsers;
