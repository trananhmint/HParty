import React, { useState, useEffect } from 'react';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import './ServicePieChart.css'
import { fetchService } from '../../Context/fetchService';
import { fetchRoom } from '../../Context/fetchRoom';




export default function ServicePieChart() {
  const [items, setItems] = useState([]);
  const [items1, setItems1] = useState([]);
  const [totalServices, setTotalServices] = useState(0);
  const [Decoration, setDecoration] = useState(0);
  const [Waiter, setWaiter] = useState(0);
  const [Food, setFood] = useState(0);
  const [Room, setRoom] = useState(0);

  const fetchData = async () => {
    try {
      const data = await fetchService();
      setItems(data.data.data);
      console.log(data.data.data);
      const data1 = await fetchRoom();
      setItems1(data1.data.data);
      console.log(data1.data.data);
    } catch (err) {
      console.log(err);
    }

  }

  useEffect(() => {
    fetchData();
  }, []);


  useEffect(() => {
    // Tính tổng số services và rooms
    const total = items.length + items1.length ;
    setTotalServices(total);

    // Tính số lượng người dùng active
    const decor = items.filter(service => service.categoryId === 1).length;
    setDecoration(decor);
    const food = items.filter(service => service.categoryId === 2).length;
    setFood(food);
    const waiter = items.filter(service => service.categoryId === 3).length;
    setWaiter(waiter);
    const room = items1.length;
    setRoom(room);
  }, [items, items1]);  


  // Tạo dữ liệu cho Pie Chart
  const data = [
    { value: Decoration, color: '#D2691E', label: 'Decoration' },
    { value: Waiter, color: '#CD853F', label: 'Waiter' },
    { value: Room, color: '#DAA520', label: 'Room' },
    { value: Food, color: '#B8860B', label: 'Food & Drinks'}
  ];

  const size = {
    width: 400,
    height: 200,
  };
  return (
    <div className="chart-container">
      <div className="chart-wrapper">
        <h3>Number of Services and Rooms: {totalServices}</h3>
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
