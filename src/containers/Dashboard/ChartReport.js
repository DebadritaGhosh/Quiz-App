import React from 'react';
import { makeStyles, Card, Typography } from '@material-ui/core';
import ChartComponent from 'components/Chart';

const ChartReport = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.first}>
        <Typography variant="h3" color="textPrimary" className={classes.title}>
          {'VP / 일반유저 누적 사용자수 >'}
        </Typography>
        <Card style={{ padding: 10 }}>
          <ChartComponent />
        </Card>
      </div>

      <div className={classes.second}>
        <Typography variant="h3" color="textPrimary" className={classes.title}>
          {'콘텐츠 수 – 일반유저 가입수  >'}
        </Typography>
        <Card style={{ padding: 10 }}>
          <ChartComponent />
        </Card>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  first: {
    width: '100%',
    height: 400,
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(1),
  },
  second: {
    width: '100%',
    height: 400,
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(1),
  },
  title: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));

export default ChartReport;
