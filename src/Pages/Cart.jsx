import React from 'react'
import CartItems from '../Components/CartItems/CartItems';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import BackButton from '../Components/BackButton/BackButton';

export const Cart = () => {
  return (
    <div>
      <Navbar />
      <BackButton/>
      <CartItems />
      <Footer />
    </div>
  )
}

export default Cart;