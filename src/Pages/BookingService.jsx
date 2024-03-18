import React, { useState } from 'react'
import './CSS/BookingService.css'
import Footer from '../Components/Footer/Footer';
import TitleBar from '../Components/TitleBar/TitleBar';
import AddressDisplay from '../Components/AddressDisplay/AddressDisplay';
import ShopCart from '../Components/ShopCart/ShopCart';
import Payment from '../Components/Payment/Payment';
export const BookingService = () => {
  const title = 'payment'

  return (
    <div className='booking-service'>
      <TitleBar title={title} />
      {/* <BackButton /> */}
      <AddressDisplay />
      <ShopCart />
      <Payment />
      <Footer />
    </div>
  )
}

export default BookingService;