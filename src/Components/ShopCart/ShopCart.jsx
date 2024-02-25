import React, { useContext } from 'react'
import './ShopCart.css'
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined';
import { ServiceContext } from '../../Context/ServiceContext';
export const ShopCart = () => {
    const { services, rooms, cartItems, product, removeFromCart, removeRoomsFromCart } = useContext(ServiceContext);

    return (
        <div className='shopcart'>
            <div className="shopcart-format-main">
                <p id='product'>Product</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
            </div>
            <div className="shopcart-format-shopname">
                <p>Company A</p>
                <hr />
                <p id='chatting'><MessageOutlinedIcon />Chat now</p>
            </div>
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
            <hr />
            <div className="shopcart-format-voucher">
                <p><ConfirmationNumberOutlinedIcon />Shop's Voucher</p>
                <div className="shopcart-format-voucher-change">
                    <p>Sale 15%</p>
                    <button>Choose Voucher</button>
                </div>
            </div>
            <hr />
            <div className="shopcart-format-message">
                <p>Message:</p>
                <div className="shopcart-format-message-textarea">
                    <textarea placeholder='Message for seller'></textarea>
                </div>
            </div>
        </div>
    )
}

export default ShopCart