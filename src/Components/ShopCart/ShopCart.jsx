import React, { useContext } from 'react'
import './ShopCart.css'
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined';
import { ServiceContext } from '../../Context/ServiceContext';
export const ShopCart = () => {
    const { all_service, cartItems, removeFromCart } = useContext(ServiceContext);
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
                <p id='chatting'><MessageOutlinedIcon /> Chat now</p>
            </div>
            {all_service.map((e) => {
                if (cartItems[e.id] > 0) {
                    return <div>
                        <div className="shopcart-format shopcart-format-main">
                            <img src={e.image} alt="" className='shopcart-image' />
                            <p>{e.name}</p>
                            <p>{e.new_price}.000đ</p>
                            <button className="shopcart-quantity">{cartItems[e.id]}</button>
                            <p>{e.new_price * cartItems[e.id]}đ</p>
                            <RemoveCircleOutlineOutlinedIcon className='shopcart-remove' onClick={() => { removeFromCart(e.id) }} />
                        </div>
                    </div>
                } else {
                    return null;
                }
            })}
            <hr />
            <div className="shopcart-format-voucher">
                <p><ConfirmationNumberOutlinedIcon /> Shop's Voucher</p>
                <div className="shopcart-format-voucher-change">
                    <p>Sale 15%</p>
                    <button>Choose Voucher</button>
                </div>
            </div>
            <hr />
            <div className="shopcart-format-message">
                <p>Message for Seller:</p>
                <div className="shopcart-format-message-textarea">
                    <textarea placeholder='Type your message here'></textarea>
                </div>
            </div>
        </div>
    )
}

export default ShopCart