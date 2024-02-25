import React, { useContext, useState } from 'react'
import './CartItems.css'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined';
import { ServiceContext } from '../../Context/ServiceContext';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/CartSlice';

export const CartItems = () => {
  const { services, rooms, cartItems, totalPrice, product, removeFromCart, removeRoomsFromCart, getTotalPrice, getCountOfCart } = useContext(ServiceContext);

  const dispatch = useDispatch();

  console.log(services);
  console.log(rooms)
  const navigate = useNavigate();

  const handleClick = (rooms, services, totalPrice) => {
    const newItems = {
      rooms: rooms,
      services: services,
      totalPrice: totalPrice,
    }
    dispatch(addToCart(newItems))
  }



  // const cart = useSelector((state) => state.cart.cart)
  // console.log(cart);


  return (
    <form >
      <div className='cartitems'>
        <div className="cartitems-items">
          <h1>Your Shopping Cart</h1>
          <div className="cartitems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
          </div>
          <hr />

          {rooms.map((e) => {
            if (product[e.roomId] > 0) {
              return <div>
                <div className="cartitems-format cartitems-format-main">
                  <img src={e.imgPath} alt="" className='cartitems-image' />
                  <p>{e.roomName}</p>
                  <p>{e.price}đ</p>
                  <button className="cartitems-quantity">{product[e.roomId]}</button>
                  <p>{e.price * product[e.roomId]} đ</p>
                  <RemoveCircleOutlineOutlinedIcon className='cartitems-remove' onClick={() => { removeRoomsFromCart(e.roomId) }} />
                </div>
              </div>
            } else {
              return null;
            }
          })}

          {services.map((e) => {
            if (cartItems[e.serviceId] > 0) {
              return <div>
                <div className="cartitems-format cartitems-format-main">
                  <img src={e.imgPath} alt="" className='cartitems-image' />
                  <p>{e.serviceName}</p>
                  <p>{e.price}đ</p>
                  <button className="cartitems-quantity">{cartItems[e.serviceId]}</button>
                  <p>{e.price * cartItems[e.serviceId]} đ</p>
                  <RemoveCircleOutlineOutlinedIcon className='cartitems-remove' onClick={() => { removeFromCart(e.serviceId) }} />
                </div>
              </div>
            } else {
              return null;
            }
          })}
        </div>


        <div className="cartitems-total">
          <div className="cartitems-total-promotion">
            <p> <ConfirmationNumberOutlinedIcon /> Shop voucher</p>
            <p>Choose voucher or enter your code</p>
          </div>
          <hr />
          <div className="cartitems-total-cart">
            <p className="cartitems-total-services">Choose {getCountOfCart()} service(s)</p>
            <div className="cartitems-total-price">
              <p>Total: </p>
              {/* <input name="totalPrice" onChange={handleInput}/> */}
              <p>{getTotalPrice()} đ</p>
            </div>

            <Link to='/bookingService'><button onClick={()=> handleClick(rooms, services, totalPrice)}>BOOKING</button></Link>



          </div>
        </div>

      </div>
    </form>

  )
}

export default CartItems