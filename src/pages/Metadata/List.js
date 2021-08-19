import React from 'react';
import { Container, Box, makeStyles, Typography } from '@material-ui/core';
// containers
import GeneralFilter from 'containers/Metadata';
// components
import Page from 'components/Page';

const List = () => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="메타데이터 관리">
      <Container maxWidth={false}>
        <Typography variant="h3" color="textPrimary">
          메타데이터 관리
        </Typography>
        <Box mt={3}>
          <GeneralFilter />
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
