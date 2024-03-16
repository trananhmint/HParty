import React, { useState, useEffect } from 'react';
import './AdminRevenue.css'
import { fetchBooking } from '../../Context/fetchBooking';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



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
      <ShoppingCartIcon fontSize='large' style={{color: '#D2691E'}}/>
        <h3 style={{whiteSpace: 'nowrap'}}>Number of Bookings: {totalBooking}</h3>
        <span style={{fontSize:'30px'}}>{revenue} VND</span>
      </div>
    </div>
  );
}