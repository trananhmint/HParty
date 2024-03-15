import React, { useState, useEffect } from 'react';
// import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import './AdminRevenue.css'
import { fetchBooking } from '../../Context/fetchBooking';


// const data = [
//   { value: 30, color: '#F4A460', label: 'Completed' },
//   { value: 20, color: '#F5DEB3', label: 'Proccessing' },
//   { value: 10, color: '#DEB887', label: 'Canceled' },
// ];

// const size = {
//   width: 400,
//   height: 200,
// };



export default function AdminRevenue() {
  const [totalBooking, setTotalBooking] = useState(0);
  const  [revenue, setRevenue]=useState([]);
  const [items, setItems] = useState([]);


  const fetchData = async () => {
    try {
      const data = await fetchBooking();
      setItems(data.data.data);
      console.log(data.data.data);
    } catch (err) {
      console.log(err);
    }

  };

  useEffect(() => {
    fetchData();
  }, []);


  useEffect(() => {
    // Tính tổng số booking
    const total= items.length;
    setTotalBooking(total);

     // Tính tổng doanh thu
     const revenues = items.reduce((acc, currentItem) => {
      const servicesTotalPrice = currentItem.services.reduce((acc, service) => acc + service.price, 0);
      const bookingTotalPrice = servicesTotalPrice + currentItem.room.price;
      return acc + bookingTotalPrice;
  }, 0);
  setRevenue(revenues);
  }, [items]);

  return (
    <div className="chart-container">
      <div className="chart-wrapper">
        <h3>Number of Bookings: {totalBooking}</h3>
        <span>Revenue of all bookings: {revenue} VND</span>
        {/* <PieChart
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
        /> */}

      </div>
    </div>
  );
}