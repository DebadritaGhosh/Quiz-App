import React, { useState } from 'react';
import axios from 'axios';
import {
  Container,
  makeStyles,
  Typography,
  Box,
  Button,
} from '@material-ui/core';

// containers
import StatsContainer from 'containers/Statistics/Connection';
// components
import Page from 'components/Page';

// hooks
import useForm from 'hooks/useForm';
import usePagination from 'hooks/usePagination';

// utils
import { queryStringMaker } from 'utils';

const ConnectionStatistics = () => {
  const classes = useStyles();
  const filter = useForm({
    orderBy: 'lastSeen',
    sort: 'desc',
    interval: 'daily',
    startDate: '',
    endDate: '',
    userType: 'all',
    country: '',
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
    <Page className={classes.root} title="접속 통계">
      <Container maxWidth={false}>
        <Typography variant="h3" color="textPrimary">
          접속 통계
        </Typography>
        <StatsContainer.Filter filter={filter} pagination={pagination} />
        <Box className={classes.buttons} pt={1}>
          <Button variant="outlined" color="primary">
            엑셀 다운로드
          </Button>
        </Box>
        <StatsContainer.Table filter={filter} pagination={pagination} />
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
  },
}));

export default ConnectionStatistics;
