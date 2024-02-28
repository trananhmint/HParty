import React, { useContext } from 'react'
import './ShopCart.css'
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined';
import { ServiceContext } from '../../Context/ServiceContext';
export const ShopCart = () => {
  const { CartOfItems, getQuantity } = useContext(ServiceContext);
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
      {CartOfItems().map((item) => {
        if (item.roomId !== undefined && item.roomId !== null && item.roomId !== "" && item.roomId > 0) {
          return <div>
            <div className="cartitems-format cartitems-format-main">
              <img src={item.imgPath} alt="" className='cartitems-image' />
              <p>{item.roomName}</p>
              <p>{item.price}đ</p>
              <p className="cartitems-quantity">
                {/* {product[item.roomId]} */}
                {getQuantity(item.roomId)}
              </p>
              <p>{item.price * getQuantity(item.roomId)} đ</p>
            </div>
          </div>


        } else {
          return null;
        }

      })

      }

      {CartOfItems().map((item) => {
        if (item.serviceId !== undefined && item.serviceId !== null && item.serviceId !== "" && item.serviceId > 0) {
          return <div>
            <div className="cartitems-format cartitems-format-main">
              <img src={item.imgPath} alt="" className='cartitems-image' />
              <p>{item.serviceName}</p>
              <p>{item.price}đ</p>
              <p className="cartitems-quantity">
                {/* {cartItems[item.serviceId]} */}
                {getQuantity(item.serviceId)}
              </p>
              <p>{item.price * getQuantity(item.serviceId)} đ</p>
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