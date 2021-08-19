import React from 'react';
import axios from 'axios';
import { Box, makeStyles, Button } from '@material-ui/core';
import { useHistory } from 'react-router';
// containers
import GroupFilter from './GroupFilter';
import GroupTable from './GroupTable';
// hooks
import useForm from 'hooks/useForm';
import usePagination from 'hooks/usePagination';
// utils
import { queryStringMaker } from 'utils';

const VPUsers = () => {
  const classes = useStyles();
  const history = useHistory();
  const filter = useForm({
    orderBy: 'createdDate',
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
      <GroupFilter pagination={pagination} filter={filter} />
      <Box mt={3}>
        <Box className={classes.buttons}>
          <Button variant="outlined" color="primary">
            엑셀 다운로드
          </Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => history.push('/group/register')}
          >
            신규등록
          </Button>
        </Box>
      </Box>
      <GroupTable pagination={pagination} filter={filter} />
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(1),
    // '& > button': {
    //   margin: theme.spacing(0.5),
    // },
  },
}));

export default VPUsers;
