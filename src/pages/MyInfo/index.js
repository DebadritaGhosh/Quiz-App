import React from 'react';
import { Container, makeStyles, Typography } from '@material-ui/core';
import { useHistory } from 'react-router';

// components
import Page from 'components/Page';
// containers
import MyInfoContainers from 'containers/MyInfo';

const MyInfo = () => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="나의 계정정보">
      <Container maxWidth={false}>
        <Typography variant="h3" color="textPrimary">
          나의 계정정보
        </Typography>
        <MyInfoContainers.Details />
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

export default MyInfo;
