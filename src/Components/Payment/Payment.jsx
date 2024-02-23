import React, { useContext, useState } from 'react'
import './Payment.css'
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';
import { ServiceContext } from '../../Context/ServiceContext';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../Context/AuthProvider';
import { useSelector } from 'react-redux';
import axios from 'axios';
export const Payment = () => {
    let date = new Date();
    const cart = useSelector((state) => state.cart.cart)
    const key = cart.length - 1;
    const serviceId = cart[key].services.map(service => { return service.serviceId })
    const roomIds = cart[key].rooms.map(room => { return room.roomId });
    const totalPrice = cart[key].totalPrice;
    // console.log(cart);
    // console.log(cart[key].rooms[0].roomId);
    console.log(roomIds[0])
    console.log(serviceId);
    console.log(totalPrice);


    const navigate = useNavigate();
    const [booking, setBooking] = useState({
        startTime: date,
        endTIme: date,
        totalPrice: totalPrice,
        roomId: roomIds[0],
        serviceId: serviceId,
    })

    // const handleInput = (e) => {
    //   const { name, value } = e.target;
    //   setBooking((prev) => ({
    //     ...prev,
    //     [name]: value,
    //   }));
    //   console.log(e.target)
    // };

    const fetchBooking = async (data) => {
        try {
            console.log("Hello")
            const response = await axios.post("https://bookingbirthdayparties.azurewebsites.net/api/Booking", data)
            console.log(response);
            console.log("Post created:", response.data);
            navigate("/bookingService");
            console.log("Success");
            alert("Booking successfully");

        } catch (error) {
            console.error(error);
            console.log("This is an invalid booking")
            alert("Booking failed");
        }
    }

    // // const cart = useSelector((state) => state.cart.cart)
    // // console.log(cart);

    const handleSubmitEvent = (e) => {
        e.preventDefault();
        if (booking.totalPrice !== "" && booking.roomId !== "" && booking.serviceId !== "") {
            fetchBooking(booking);
            return;
        }
        alert("Please choose services again.");
        console.log(booking.totalPrice);
    };


    const { getTotalPrice } = useContext(ServiceContext);
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
        <form onSubmit={handleSubmitEvent}>
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
                    <Link to='/alerts'></Link>
                    <button type='submit'>PROCEED TO CHECKOUT</button>
                </div>
            </div>
        </form>

    )
}

export default Payment;