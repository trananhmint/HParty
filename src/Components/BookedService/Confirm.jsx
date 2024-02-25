import React from 'react'
import './Confirm.css'

const Confirm = () => {

  return (
    <div className='confirm'>
      <div className="confirm-format">
        <div className="confirm-title">
          <p>Products</p>
          {/* <p>Title</p> */}
          {/* <p>Price</p> */}
          <p>Quantity</p>
          <p>Total</p>
        </div>
        <hr />

        {/* {booking.map((e) => {
          if (product[e.bookingId] > 0) {
        return */}
        <div>
          <div className="confirm-title">
            {/* <img src={imgPath} alt="" className='cartitems-image' /> */}
            <p> Room ABC</p>
            <p> 1779324đ</p>
            {/* <button className="cartitems-quantity">{product[e.roomId]}</button> */}
            <p>1000000 đ</p>
          </div>
        </div>
        {/* } else {
            return null;
          }
        })} */}
      </div>
    </div>
  )
}

export default Confirm