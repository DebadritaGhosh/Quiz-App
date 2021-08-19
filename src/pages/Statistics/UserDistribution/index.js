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
import StatsContainer from 'containers/Statistics/UserDistribution';
// components
import Page from 'components/Page';

const UserDistribution = () => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="국가별 사용자 분포">
      <Container maxWidth={false}>
        <Typography variant="h3" color="textPrimary">
          국가별 사용자 분포
        </Typography>
        <Box className={classes.buttons} pt={1}>
          <Button variant="outlined" color="primary">
            엑셀 다운로드
          </Button>
        </Box>
        <StatsContainer.Table pagination={{}} />
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

export default UserDistribution;
