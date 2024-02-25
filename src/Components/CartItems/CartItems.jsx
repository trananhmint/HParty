import React, { useContext } from 'react'
import './CartItems.css'

import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined';
import { ServiceContext } from '../../Context/ServiceContext';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/CartSlice';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { useAuth } from '../../Context/AuthProvider';
import { toast } from 'react-toastify';

export const CartItems = () => {
  const { services, rooms, cartItems, totalPrice, product, AddToCart, AddRoomsToCart, removeFromCart, removeRoomsFromCart, getTotalPrice, getCountOfCart } = useContext(ServiceContext);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const auth = useAuth();
  const user = auth.user;


  const handleClick = (rooms, services, totalPrice, user) => {
    const newItems = {
      rooms: rooms.filter(room => product[room.roomId] > 0),
      services: services.filter(service => cartItems[service.serviceId] > 0),
      totalPrice: totalPrice,
    }
    if (user !== null && user !== "") {
      dispatch(addToCart(newItems))
      navigate("/bookingService");
    }
    else {
      toast.warning('Login before booking', {
        position: "top-right",
        autoClose: 10000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      navigate("/cart");
    }

  }
  const handleSubmit = (e) => {
    e.preventDefault();

    const newItems = {
      rooms: rooms.filter(room => product[room.roomId] > 0),
      services: services.filter(service => cartItems[service.serviceId] > 0),
      totalPrice: totalPrice,
    }
    console.log(typeof newItems.rooms);
    console.log(newItems.rooms);
    if (user !== null && user !== "") {
      if (newItems.rooms !== null && newItems.rooms.length !== 0) {
        dispatch(addToCart(newItems))
        navigate("/bookingService");
      } else {
        toast.warning('Must choose room to book', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }
    else {
      toast.warning('Login before booking', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      // navigate("/cart");
    }

  }

  // const cart = useSelector((state) => state.cart.cart)
  // console.log(cart);


  return (
    <form onSubmit={handleSubmit}>
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
                  <p className="cartitems-quantity">
                    {product[e.roomId]}
                  </p>
                  <p>{e.price * product[e.roomId]} đ</p>
                  <AddCircleOutlineOutlinedIcon className='cartitems-remove' onClick={() => { AddRoomsToCart(e.roomId) }} />
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
                  <AddCircleOutlineOutlinedIcon className='cartitems-remove' onClick={() => { AddToCart(e.serviceId) }} />
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
            <button >BOOKING</button>
          </div>
        </div>
      </div>
    </form>

  )
}

export default CartItems