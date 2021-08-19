import React from 'react';
import { Container, makeStyles, Typography } from '@material-ui/core';

// components
import Page from 'components/Page';
// containers
import MyInfoContainers from 'containers/MyInfo';
import useForm from 'hooks/useForm';

const MyInfoEdit = () => {
  const classes = useStyles();
  const { form, changeForm } = useForm({
    userName: '홍길동',
    email: 'wejiorfsdi@naver.com',
  });

  return (
    <Page className={classes.root} title="나의 계정정보 수정">
      <Container maxWidth={false}>
        <Typography variant="h3" color="textPrimary">
          나의 계정정보 수정
        </Typography>
        <MyInfoContainers.Edit form={form} changeForm={changeForm} />
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

export default MyInfoEdit;
