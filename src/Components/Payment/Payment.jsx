import React, { useContext, useState } from 'react'
import './Payment.css'
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';
import EventNoteIcon from '@mui/icons-material/EventNote';
import { ServiceContext } from '../../Context/ServiceContext';
import { redirect, useNavigate } from 'react-router-dom';
import { useAuth } from '../../Context/AuthProvider';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { toast } from 'react-toastify';


export const Payment = () => {
    const { clearCart } = useContext(ServiceContext);
    const navigate = useNavigate();

    const cart = useSelector((state) => state.cart.cart)
    const key = cart.length - 1;
    const serviceId = cart[key].services.map(service => { return service.serviceId })
    const roomIds = cart[key].rooms.map(room => { return room.roomId });
    const totalPrice = cart[key].totalPrice;

    console.log(roomIds[0])
    console.log(serviceId);
    console.log(totalPrice);

    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');


    const [booking, setBooking] = useState({
        startTime: startTime,
        endTIme: endTime,
        totalPrice: totalPrice,
        roomId: roomIds[0],
        serviceIds: serviceId,
    })
    const handleInput = (e) => {
        const { name, value } = e.target;
        setBooking((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const fetchBooking = async (data) => {
        try {
            const response = await axios.post("https://bookingbirthdayparties.azurewebsites.net/api/Booking", data,
                {
                    withCredentials: true // Ensure credentials are included
                })
            console.log(response);
            console.log("Post created:", response.data);
            // navigate("/alerts");
            console.log("Success Booking");
            toast.success('Booking successfully', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",

            });
            // alert("Booking successfully");

        } catch (error) {
            console.error(error);
            console.log("This is an invalid booking")
            toast.error('Booking failed', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",

            });
        }
    }

    // // const cart = useSelector((state) => state.cart.cart)
    // // console.log(cart);

    const fetchVNPAY = async (data) => {
        try {
            console.log(data);
            const response = await axios.post("https://bookingbirthdayparties.azurewebsites.net/api/VNPay", {
                totalPrice: data
            },
                {
                    headers: {
                        "Content-Type": "application/json"
                    },
                    withCredentials: true // Ensure credentials are included
                })
            console.log(response);
            console.log("VNPAY created:", response.data.url);
            // navigate("/alerts");
            console.log("Success");
            toast.success('Move to VNPAY', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",

            });
            window.location.href = response.data.url;
            // alert("Booking successfully");

        } catch (error) {
            console.error(error);
            console.log("There are errors")
            toast.error('VNPAY failed', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",

            });
        }
    }

    const handleSubmitEvent = (e) => {
        e.preventDefault();
        if (booking.totalPrice !== "" && booking.roomId !== "" && booking.serviceIds !== "" && booking.startTime !== "" && booking.endTIme !== "") {
            fetchBooking(booking);
            fetchVNPAY(totalPrice);
            // clearCart();
            return;
        } else if (booking.roomId === "") {
            toast.warning('Please choose A Room before booking.', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",

            });
        } else if (booking.serviceIds.length === 0) {
            toast.warning('Please choose services again.', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",

            });
        } else if (booking.startTime === "" && booking.endTIme === "") {
            toast.warning('Please enter Time for party', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    };



    const handleSubmitVNPAY = (e) => {
        e.preventDefault();
        if (totalPrice !== null) {
            fetchVNPAY(totalPrice);
            return;
        } else if (totalPrice === null) {
            toast.warning('Please Choose Services !!!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",

            });
        }
    };





    const { getTotalPrice } = useContext(ServiceContext);
    const auth = useAuth();
    const handleClick = () => {
        document.querySelector("#methods").style.display = "none";
        document.querySelector("#methods-button").style.display = "none";
        let html = `<input className ="payment-methods-change-radio" type="radio" id="byCash" name="methods" value="byCash" />
                    <label for="byCash">By Cash</label>
                    
                    <input  className ="payment-methods-change-radio" type="radio" id="byBanking" name="methods" value="byVNPAY" />
                    <label for="byBanking">By VNPAY</label>`;
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
                <div className="payment-input-time">
                    <p><EventNoteIcon /> Choose Party Time</p>
                    <input type="datetime-local" id='booking-startTime' name='startTime' aria-describedby='booking-startTime' aria-invalid="false" onChange={handleInput} />
                    <input type="datetime-local" id='booking-endTIme' name='endTIme' aria-describedby='booking-endTIme' aria-invalid="false" onChange={handleInput} />
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
                    <button type='submit'  >PROCEED TO CHECKOUT</button>
                    {/* <form onSubmit={handleSubmitVNPAY}>
                        <button type='submit'>DEPOSIT</button>
                    </form> */}
                </div>
            </div>
        </form>

    )
}

export default Payment;