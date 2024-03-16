import React, { useState, useEffect } from 'react';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import './Userpiechart.css'
import axios from 'axios';



export default function UserPieChart() {
  const [items, setItems] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);
  const [activeUsers, setActiveUsers] = useState(0);

  const fetchData = async () => {
    try {
      const data = await axios.get('https://bookingbirthdayparties.azurewebsites.net/api/users',
        {
          withCredentials: true,
        });
      console.log(data);
      setItems(data.data.data);

    } catch (err) {
      console.log(err);
    }

  }



  useEffect(() => {
    fetchData();
  }, []);

  // const data = [
  //   { value: 30, color: '#D2691E', label: 'Active' },
  //   { value: 10, color: '#CD853F', label: 'Unactive' },
  // ];
  
  // const size = {
  //   width: 400,
  //   height: 200,
  // };

  useEffect(() => {
    // Tính tổng số người dùng
    const total = items.length;
    setTotalUsers(total);

    // Tính số lượng người dùng active
    const active = items.filter(user => user.status === 'ACTIVE').length;
    setActiveUsers(active);
  }, [items]);

  // Tạo dữ liệu cho Pie Chart
  const data = [
    { value: activeUsers, color: '#D2691E', label: 'Active' },
    { value: totalUsers - activeUsers, color: '#CD853F', label: 'Inactive' },
  ];

  const size = {
    width: 400,
    height: 200,
  };
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
