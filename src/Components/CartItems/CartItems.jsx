import React, { useContext } from 'react'
import './CartItems.css'

import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined';
import { ServiceContext } from '../../Context/ServiceContext';
import { Link } from 'react-router-dom';
export const CartItems = () => {
  const { all_service, cartItems, removeFromCart } = useContext(ServiceContext);
  const { getTotalPrice, getCountOfCart } = useContext(ServiceContext);


  return (
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
        {all_service.map((e) => {
          if (cartItems[e.id] > 0) {
            return <div>
              <div className="cartitems-format cartitems-format-main">
                <img src={e.image} alt="" className='cartitems-image' />
                <p>{e.name}</p>
                <p>{e.new_price}.000đ</p>
                <button className="cartitems-quantity">{cartItems[e.id]}</button>
                <p>{e.new_price * cartItems[e.id]} đ</p>
                <RemoveCircleOutlineOutlinedIcon className='cartitems-remove' onClick={() => { removeFromCart(e.id) }} />
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
          <p className="cartitems-total-services">Chose {getCountOfCart()} service(s)</p>
          <div className="cartitems-total-price">
            <p>Total: </p>
            <p>{getTotalPrice()} đ</p>
          </div>
          <Link to="/bookingService"><button>BOOKING</button></Link>
        </div>
      </div>

    </div>
  )
}

export default CartItems