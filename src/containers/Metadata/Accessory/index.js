import React from 'react';
import axios from 'axios';
import { Box, makeStyles, Button } from '@material-ui/core';
import { useHistory } from 'react-router';
// containers
import AccessoryFilter from './AccessoryFilter';
import AccessoryTable from './AccessoryTable';

// hooks
import useForm from 'hooks/useForm';
import usePagination from 'hooks/usePagination';
// utils
import { queryStringMaker } from 'utils';

const Accessory = () => {
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

    if (pagination.filter.keyword)
      filterObject.keyword = pagination.filter.keyword;

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
      <AccessoryFilter pagination={pagination} filter={filter} />
      <Box mt={3}>
        <Box className={classes.buttons}>
          <Button variant="outlined" color="primary">
            엑셀 다운로드
          </Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={(e) => {
              e.preventDefault();
              localStorage.setItem('metadataType', 'accessory');
              history.push('/metadata/register');
            }}
          >
            신규등록
          </Button>
        </Box>
      </Box>
      <AccessoryTable pagination={pagination} filter={filter} />
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

export default Accessory;
