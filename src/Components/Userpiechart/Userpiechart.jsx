import React, { useState, useEffect } from 'react';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import './Userpiechart.css'

const data = [
  { value: 30, color: '#D2691E', label: 'Active' },
  { value: 10, color: '#CD853F', label: 'Unactive' },
];

const size = {
  width: 400,
  height: 200,
};

export default function UserPieChart() {
  const [totalUsers, setTotalUsers] = useState(0);

  useEffect(() => {
    const sum = data.reduce((acc, item) => acc + item.value, 0);
    setTotalUsers(sum);
  }, []);

  return (
    <div className="chart-container">
      <div className="chart-wrapper">
        <h3>Number of Users: {totalUsers}</h3>
        <PieChart
          series={[
            {
              arcLabelMinAngle: 45,
              data,
            },
          ]}
          sx={{
            [`& .${pieArcLabelClasses.root}`]: {
              fill: 'white',
              fontWeight: 'bold',
            },
          }}
          {...size}
        />
      </div>
    </div>
  );
}
