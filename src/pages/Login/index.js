import React from 'react';
import {
  Avatar,
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Divider,
  colors,
  makeStyles,
} from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';
import { useHistory } from 'react-router';
import Page from 'components/Page';
import Form from './Form';

const Login = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Page className={classes.root} title="Login">
      <Container maxWidth="sm">
        <Card className={classes.card}>
          <CardContent className={classes.content}>
            <Avatar className={classes.icon}>
              <LockIcon fontSize="large" />
            </Avatar>
            <Typography variant="h2" color="textPrimary">
              로그인
            </Typography>
            <Box mt={3}>
              <Form
                onSubmitSuccess={() => {
                  history.replace('/user');
                }}
              />
            </Box>
            <Box my={2}>
              <Divider />
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Page>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: 'center',
    backgroundColor: theme.palette.background.dark,
    display: 'flex',
    height: '100%',
    minHeight: '100%',
    flexDirection: 'column',
    paddingBottom: 80,
    paddingTop: 80,
  },
  backButton: {
    marginLeft: theme.spacing(2),
  },
  card: {
    overflow: 'visible',
    display: 'flex',
    position: 'relative',
    '& > *': {
      flexGrow: 1,
      flexBasis: '50%',
      width: '50%',
    },
  },
  content: {
    padding: theme.spacing(8, 4, 3, 4),
  },
  icon: {
    backgroundColor: colors.green[500],
    color: theme.palette.common.white,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1),
    position: 'absolute',
    top: -32,
    left: theme.spacing(3),
    height: 64,
    width: 64,
  },
  media: {
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    padding: theme.spacing(3),
    color: theme.palette.common.white,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
}));

export default Login;
