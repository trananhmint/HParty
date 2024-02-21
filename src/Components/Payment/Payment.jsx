import React, { useContext } from 'react'
import './Payment.css'
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';
import { ServiceContext } from '../../Context/ServiceContext';
import { Link } from 'react-router-dom';
import { useAuth } from '../../Context/AuthProvider';
export const Payment = () => {
    const { getTotalPrice} = useContext(ServiceContext);
    const auth = useAuth();
    const user = auth.user;
    const handleClick = () => {
        document.querySelector("#methods").style.display = "none";
        document.querySelector("#methods-button").style.display = "none";
        let html = `<input className ="payment-methods-change-radio" type="radio" id="byCash" name="methods" value="byCash" />
                    <label for="byCash">By Cash</label>
                    
                    <input  className ="payment-methods-change-radio" type="radio" id="byBanking" name="methods" value="byBanking" />
                    <label for="byBanking">By Banking</label>`;
        var payment = document.querySelector(".payment-methods-change");
        payment.innerHTML = html;
    }



    return (
        <div className='payment'>
            <div className="payment-methods">
                <p><LocalAtmOutlinedIcon /> Payment Method</p>
                <div className="payment-methods-change">
                    <p id="methods" name="methods">By Cash</p>
                    <button id="methods-button" onClick={handleClick}>Choose Method</button>

                </div>
            </div>
            <hr />
            <div className="payment-total">
                <div>
                    <div className="payment-total-item">
                        <p>Sub Total</p>
                        <p>{getTotalPrice()}đ</p>
                    </div>
                    <hr />
                    <div className="payment-total-item">
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="payment-total-item">
                        <h3>Total</h3>
                        <h3>{getTotalPrice() + 0} đ</h3>
                    </div>
                </div>
            </div>
            <hr />
            <div className="payment-total-button">
                <p>Enter "Proceed to checkout" to agree with <span>Conditions of HParty</span></p>

              
                <Link to='/alerts'><button>PROCEED TO CHECKOUT</button></Link>
            </div>
        </div>
    )
}

export default Payment;