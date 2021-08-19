import React from 'react';
import { Container, makeStyles, Typography } from '@material-ui/core';

// containers
import DashboardContainers from 'containers/Dashboard';
// components
import Page from 'components/Page';

const DashboardPage = () => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="대시보드">
      <Container maxWidth={false}>
        <Typography variant="h2" color="textPrimary">
          {'대시보드'}
        </Typography>
        <DashboardContainers.Overview />

        <DashboardContainers.UserDistribution />

        <DashboardContainers.ChartReport />
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

export default DashboardPage;
