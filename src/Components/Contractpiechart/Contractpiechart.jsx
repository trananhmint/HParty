import React, { useState, useEffect } from 'react';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import './Contractpiechart.css'

const data = [
  { value: 30, color: '#F4A460', label: 'Completed' },
  { value: 20, color: '#F5DEB3', label: 'Proccessing' },
  { value: 10, color: '#DEB887', label: 'Canceled' },
];

const size = {
  width: 400,
  height: 200,
};

export default function ContractPieChart() {
  const [totalContracts, setTotalContracts] = useState(0);

  useEffect(() => {
    const sum = data.reduce((acc, item) => acc + item.value, 0);
    setTotalContracts(sum);
  }, []);

  return (
    <div className="chart-container">
      <div className="chart-wrapper">
        <h3>Number of Contracts: {totalContracts}</h3>
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