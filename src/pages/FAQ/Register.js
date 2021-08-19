import React from 'react';
import { Container, Box, makeStyles } from '@material-ui/core';

// containers
import FAQContainers from 'containers/FAQ';

// components
import Forbidden from 'components/Forbidden';
import Page from 'components/Page';

// hooks
import useAuthority from 'hooks/useAuthority';

const Register = () => {
  const classes = useStyles();
  const enableRead = useAuthority('lr');

  if (false) {
    return <Forbidden />;
  }
  return (
    <Page className={classes.root} title="FAQ 신규등록">
      <Container maxWidth={false}>
        <Box mt={3}>
          <FAQContainers.Register />
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

export default Register;
