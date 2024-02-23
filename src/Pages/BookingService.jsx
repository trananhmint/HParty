import React, { useState } from 'react'
import './CSS/BookingService.css'
import Footer from '../Components/Footer/Footer';
import TitleBar from '../Components/TitleBar/TitleBar';
import AddressDisplay from '../Components/AddressDisplay/AddressDisplay';
import ShopCart from '../Components/ShopCart/ShopCart';
import Payment from '../Components/Payment/Payment';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import axios from "axios";
export const BookingService = () => {
  const title = 'payment'
  // const cart = useSelector((state) => state.cart.cart)
  // const key = cart.length - 1;
  // const roomIds = cart[key].rooms.map(room=>{return room.roomId});

  // console.log(roomIds[0])
  // console.log(cart[key].services);
  // const roomWithID1 = cart.rooms.find((room) => room.roomId === 1);
  // console.log("Room with ID 1:", roomWithID1);

  return (
    <div className='booking-service'>
      <TitleBar title={title} />
      <AddressDisplay />
      <ShopCart />
      <Payment />
      <Footer />
    </div>
  )
}

export default BookingService;