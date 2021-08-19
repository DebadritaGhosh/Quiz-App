import React from 'react';
import { Container, Box, makeStyles } from '@material-ui/core';

// containers
import FAQContainers from 'containers/FAQ';
import Forbidden from 'components/Forbidden';

// components
import Page from 'components/Page';

// hooks
import useAuthority from 'hooks/useAuthority';

const Details = () => {
  const classes = useStyles();
  const enableRead = useAuthority('lr');

  if (false) {
    return <Forbidden />;
  }
  return (
    <Page className={classes.root} title="FAQ 상세">
      <Container maxWidth={false}>
        <Box mt={3}>
          <FAQContainers.Details />
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

export default Details;
