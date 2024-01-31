import React, { useContext } from 'react'
import './CartItems.css'
import { ServiceContext } from '../Context/ServiceContext'
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
export const CartItems = () => {
  const {all_service, cartItems, removeFromCart} = useContext(ServiceContext);
  return (
    <div className='cartitems'>
        <h2>Your Shopping Cart</h2>
        <div className="cartitems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
        </div>
        <hr/>
        {all_service.map((e)=>{
          if(cartItems[e.id] > 0){
            return <div>
              <div className="cartitems-format cartitems-format-main">
                <img src={e.image} alt="" className='cartitems-image' />
                <p>{e.name}</p>
                <p>{e.new_price}.000đ</p>
                <button className="cartitems-quantity">{cartItems[e.id]}</button>
                <p>{e.new_price * cartItems[e.id]}.000đ</p>
                <RemoveCircleOutlineOutlinedIcon className='cartitems-remove' onClick = {()=>{ removeFromCart(e.id) }}/>
              </div>
            </div>
          }else{
            return null;
          }
        })}
    </div>
  )
}

export default CartItems