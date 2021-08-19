import React from 'react';
import { Container, Box, makeStyles } from '@material-ui/core';

// containers
import EditContainer from 'containers/ArtistManagement/Artist/Edit';
import Forbidden from 'components/Forbidden';

// components
import Page from 'components/Page';

// hooks
import useAuthority from 'hooks/useAuthority';

const Edit = () => {
  const classes = useStyles();
  const enableRead = useAuthority('lr');

  if (false) {
    return <Forbidden />;
  }
  return (
    <Page className={classes.root} title="아티스트 수정">
      <Container maxWidth={false}>
        <Box mt={3}>
          <EditContainer />
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

export default Edit;
