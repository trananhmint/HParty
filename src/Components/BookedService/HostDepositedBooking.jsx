import React, { useEffect } from 'react'
import './Booked.css'
import axios from 'axios';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { useState } from 'react';


export const HostDepositedBooking = () => {
    const [booked, setBooked] = useState([]);
    // const [user, setUser] = useState([]);
    // const [loading, setLoading] = useState(true);




    // const fetchUser = async () => {
    //     try {
    //         const data = await axios.get("https://bookingbithdayparty.azurewebsites.net/api/User",
    //             {
    //                 withCredentials: true
    //             }
    //         );
    //         setUser(data.data.data);
    //         setLoading(false);
    //     } catch (err) {
    //         console.log(err);
    //         setLoading(false);
    //     }
    // }

    // useEffect(() => {
    //     fetchUser();
    // }, []);



    const fetchBooked = async () => {
        try {
            const response = await axios.get("https://bookingbithdayparty.azurewebsites.net/api/Booking/get_booking_partyhost", {
                withCredentials: true
            });
            setBooked(response.data.data);
            console.log(response.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchBooked();
    }, []);




    const fetchCustomerCancel = async (data) => {
        try {
            const response = await axios.post('https://bookingbithdayparty.azurewebsites.net/api/Booking/CancelByCustomer', data,
                {
                    headers: {
                        "Content-Type": "application/json"
                    },
                    withCredentials: true,
                })
            console.log(response.data);
            return response.data;
        } catch (err) {
            console.log(err);
            return null;
        }
    }


    const fetchCustomerFinish = async (data) => {
        try {
            const response = await axios.post('https://bookingbithdayparty.azurewebsites.net/api/Booking/finishBooking', data,
                {
                    headers: {
                        "Content-Type": "application/json"
                    },
                    withCredentials: true,
                })
            console.log(response.data);
            return response.data;
        } catch (err) {
            console.log(err);
            return null;
        }
    }




    const handleClick = (bookingId) => {
        window.confirm('Are you sure to cancel');
        fetchCustomerCancel(bookingId);
    }


    const handleClickFinish = (bookingId) => {
        window.confirm('Are you sure to finish');
        fetchCustomerFinish(bookingId);
    }


    function getCategory(categoryId) {
        let category;
        switch (categoryId) {
            case 1:
                category = "Decoration";
                break;
            case 2:
                category = "Food";
                break;
            case 3:
                category = "Waiter";
                break;
            default:
                category = "Unknown Category"
                break;
        }
        return category;
    }

    function getDateTime(bookingDate) {
        let now = new Date(bookingDate);
        let year = now.getFullYear();
        let month = now.getMonth() + 1;
        let day = now.getDate();
        let hour = now.getHours();
        let minute = now.getMinutes();
        let formattedDateTime = `${day}/${month}/${year} ${hour}:${minute}`;
        return formattedDateTime;
    }



    return (
        <div className='all'>
            {booked.map((book, index) => {
                if (book.status === "DEPOSITED") {
                    return <div>
                        <div className="booked">
                            <div className="booked-info">
                                <p>NO.{index + 1}</p>
                                <div className="booked-status">
                                    <p>{book.status}</p>
                                    <hr />
                                    <p>{getDateTime(book.bookingDate)}</p>
                                    <hr />
                                    <div className='booking-button'>
                                        <button id='finish' onClick={() => handleClickFinish(book.bookingId)}>FINISH</button>
                                        <button id='cancel' onClick={() => handleClick(book.bookingId)} ><CancelOutlinedIcon /></button>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="booked-items-container">
                                <div className="booked-item">
                                    <div className="booked-item-details">
                                        <div className="booked-item-img">
                                            <img src="" alt="" />
                                        </div>
                                        <div className="booked-item-info">
                                            <p className='booked-name'>{book.room.roomName}</p>
                                            <p>Type: Room</p>
                                            <p>Quantity: 1</p>
                                        </div>
                                    </div>
                                    <div className="booked-item-price">
                                        <p>{book.room.price} đ</p>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            {book.services.map((service) => {
                                return <div>
                                    <div className="booked-items-container">
                                        <div className="booked-item">
                                            <div className="booked-item-details">
                                                <div className="booked-item-img">
                                                    <img src="" alt="" />
                                                </div>
                                                <div className="booked-item-info">
                                                    <p className='booked-name'>{service.serviceName}</p>
                                                    <p>Type: {getCategory(Number(service.categoryId))}</p>
                                                    <p>Quantity: 1</p>
                                                </div>
                                            </div>
                                            <div className="booked-item-price">
                                                <p>{service.price} đ</p>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                            })}
                        </div>
                    </div>
                }

            })}
        </div>
    )
}




