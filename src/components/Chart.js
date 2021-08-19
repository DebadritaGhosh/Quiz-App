import React from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '@material-ui/core';

function ChartComponent() {
  const theme = useTheme();

  const data = {
    series: [
      {
        name: '누적 VP 회원수',
        type: 'column',
        data: [13, 22, 37, 21, 44, 22, 30],
      },
      {
        name: '누적 일반 회원수',
        type: 'area',
        data: [22, 43, 21, 41, 56, 27, 43],
      },
    ],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },

      colors: ['#13affe', '#fbab49'],
      stroke: {
        width: [0, 1, 5],
        curve: 'smooth',
      },
      plotOptions: {
        bar: {
          columnWidth: '30%',
        },
      },
      legend: {
        show: true,
        labels: {
          colors: theme.palette.text.secondary,
        },
      },

      fill: {
        opacity: [0.9, 0.5, 1],
        gradient: {
          inverseColors: false,
          shade: 'light',
          type: 'vertical',
          opacityFrom: 0.85,
          opacityTo: 0.55,
          stops: [0, 100, 100, 100],
        },
      },
      labels: [
        '05/01/2021',
        '05/02/2021',
        '05/03/2021',
        '05/04/2021',
        '05/05/2021',
        '05/06/2021',
        '05/07/2021',
      ],
      xaxis: {
        type: 'datetime',
        labels: {
          style: {
            colors: theme.palette.text.secondary,
          },
        },
      },
      yaxis: {
        min: 0,
        labels: {
          style: {
            colors: theme.palette.text.secondary,
          },
        },
      },
      tooltip: {
        theme: theme.palette.type,
        shared: true,
        intersect: false,
        y: {
          formatter: function (y) {
            if (typeof y !== 'undefined') {
              return y.toFixed(0);
            }
            return y;
          },
        },
      },
    },
  };

  return (
    <Chart
      options={data.options}
      series={data.series}
      height={300}
      width={'100%'}
    />
  );
}

export default ChartComponent;
