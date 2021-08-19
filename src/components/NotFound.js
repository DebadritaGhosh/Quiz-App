import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Typography,
  useTheme,
  useMediaQuery,
  makeStyles,
} from '@material-ui/core';

// assets
import NotFoundImage from 'assets/image/not-found.svg';

// components
import Page from 'components/Page';

const NotFound = () => {
  const classes = useStyles();
  const theme = useTheme();
  const mobileDevice = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Page className={classes.root} title="404: Not found">
      <Container maxWidth="lg">
        <Typography
          align="center"
          variant={mobileDevice ? 'h4' : 'h1'}
          color="textPrimary"
        >
          404: 페이지를 찾을 수 없습니다.
        </Typography>
        <Typography align="center" variant="subtitle2" color="textSecondary">
          정확한 주소를 입력하시거나 내비게이션 메뉴를 이용해주세요.
        </Typography>
        <Box mt={6} display="flex" justifyContent="center">
          <img
            alt="Under development"
            className={classes.image}
            src={NotFoundImage}
          />
        </Box>
        <Box mt={6} display="flex" justifyContent="center">
          <Button
            color="secondary"
            component={RouterLink}
            to="/"
            variant="outlined"
          >
            Back to home
          </Button>
        </Box>
      </Container>
    </Page>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(3),
    paddingTop: 80,
    paddingBottom: 80,
  },
  image: {
    maxWidth: '100%',
    width: 560,
    maxHeight: 300,
    height: 'auto',
  },
}));

export default NotFound;
