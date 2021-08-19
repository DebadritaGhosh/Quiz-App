import React from 'react';
import { Card } from '@material-ui/core';
import ChartComponent from 'components/Chart';

const Graph = ({ data }) => {
  return (
    <div>
      <Card style={{ marginTop: 10, marginBottom: 15 }}>
        <ChartComponent />
      </Card>
    </div>
  );
};

export default Graph;
