import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';
import './Servicebarchart.css'
const chartSetting = {
  yAxis: [
    {
      label: 'Number of services',
    },
  ],
  width: 500,
  height: 300,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: 'translate(-20px, 0)',
    },
  },
};
const dataset = [
  {
    room: 20,
    decoration: 30,
    food: 40,
    waiter: 20,
    month: 'Jan',
  },
  {
    room: 30,
    decoration: 30,
    food: 20,
    waiter: 24,
    month: 'Fev',
  },
  {
    room: 40,
    decoration: 35,
    food: 60,
    waiter: 30,
    month: 'Mar',
  },
  {
    room: 25,
    decoration: 30,
    food: 40,
    waiter: 20,
    month: 'Apr',
  },
  {
    room: 30,
    decoration: 35,
    food: 50,
    waiter: 55,
    month: 'May',
  },
  {
    room: 100,
    decoration: 50,
    food: 55,
    waiter: 50,
    month: 'June',
  },
  {
    room: 80,
    decoration: 50,
    food: 60,
    waiter: 70,
    month: 'July',
  },
  {
    room: 65,
    decoration: 30,
    food: 40,
    waiter: 70,
    month: 'Aug',
  },
  {
    room: 70,
    decoration: 80,
    food: 90,
    waiter: 100,
    month: 'Sept',
  },
  {
    room: 55,
    decoration: 80,
    food: 70,
    waiter: 90,
    month: 'Oct',
  },
  {
    room: 80,
    decoration: 60,
    food: 100,
    waiter: 80,
    month: 'Nov',
  },
  {
    room: 70,
    decoration: 80,
    food: 50,
    waiter: 60,
    month: 'Dec',
  },
];

const valueFormatter = (value) => `${value}services`;

export default function ServiceBarChart() {
  return (
    <div className="chart-container">
      <div className="chart-wrapper">
        <BarChart
          dataset={dataset}
          xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
          series={[
            { dataKey: 'room', label: 'Room', valueFormatter, color: '#F4A460' },
            { dataKey: 'decoration', label: 'Decoration', valueFormatter, color: '#DAA520' },
            { dataKey: 'food', label: 'Food', valueFormatter, color: '#B8860B' },
            { dataKey: 'waiter', label: 'Waiter', valueFormatter, color: '#8B4513' },
          ]}
          {...chartSetting}
        />
      </div>
    </div>
  );
}