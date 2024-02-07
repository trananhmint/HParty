import React from 'react'
import './Payment.css'
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';
export const Payment = () => {
    return (
        <div className='payment'>
            <div className="payment-methods">
                <p><LocalAtmOutlinedIcon/> Payment Method</p>
                <div className="payment-methods-change">
                    <p>By Cash</p>
                    <button>Choose Method</button>
                </div>
            </div>
            <hr />
            <div className="payment-total">
                <div>
                    <div className="payment-total-item">
                        <p>Sub Total</p>
                        <p>${0}</p>
                    </div>
                    <hr />
                    <div className="payment-total-item">
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="payment-total-item">
                        <h3>Total</h3>
                        <h3>${0}</h3>
                    </div>
                </div>
            </div>
            <hr />
            <div className="payment-total-button">
                <p>Enter "Proceed to checkout" to agree with <span>Conditions of HParty</span></p>
                <button>PROCEED TO CHECKOUT</button>
            </div>
        </div>
    )
}

export default Payment;