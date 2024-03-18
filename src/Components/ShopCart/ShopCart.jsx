import React, { useContext } from 'react'
import './ShopCart.css'
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined';
import { ServiceContext } from '../../Context/ServiceContext';
export const ShopCart = () => {
  const { CartOfItems, getQuantity, VND } = useContext(ServiceContext);
  return (
    <div className='shopcart'>
      <div className="shopcart-format-main">
        <p id='product'>Services</p>
        <p style={{ align: 'center' }}>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
      </div>
      {/* <div className="shopcart-format-shopname">
        <p>Company A</p>
        <hr />
        <p id='chatting'><MessageOutlinedIcon />Chat now</p>
      </div> */}
      {CartOfItems().map((item) => {
        if (item.roomId !== undefined && item.roomId !== null && item.roomId !== "" && item.roomId > 0) {
          return <div>
            <div className="shopcart-format shopcart-format-main">
              <img src={`data:image/jpeg;base64,${item.images[0].imageBase64}`} alt="Images" className='shopcart-image' />
              <p>{item.roomName}</p>
              <p>{VND.format(item.price)}</p>
              <p className="shopcart-quantity">
                {/* {product[item.roomId]} */}
                {getQuantity(item.roomId)}
              </p>
              <p>{VND.format(item.price * getQuantity(item.roomId))}</p>
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
            <div className="shopcart-format shopcart-format-main">
              <img src={`data:image/jpeg;base64,${item.images[0].imageBase64}`} alt="Images" className='shopcart-image' />
              <p>{item.serviceName}</p>
              <p>{VND.format(item.price)}</p>
              <p className="shopcart-quantity">
                {/* {cartItems[item.serviceId]} */}
                {getQuantity(item.serviceId)}
              </p>
              <p>{VND.format(item.price * getQuantity(item.serviceId))}</p>
            </div>
          </div>
        } else {
          return null;
        }
      })}
      <hr />
      {/* <div className="shopcart-format-voucher">
        <p><ConfirmationNumberOutlinedIcon />Shop's Voucher</p>
        <div className="shopcart-format-voucher-change">
          <p>Sale 15%</p>
          <button>Choose Voucher</button>
        </div>
      </div>
      <hr /> */}
      {/* <div className="shopcart-format-message">
        <p>Message:</p>
        <div className="shopcart-format-message-textarea">
          <textarea placeholder='Message for seller'></textarea>
        </div>
      </div> */}
    </div>
  )
}

export default ShopCart