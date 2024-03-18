import React, { useContext, useEffect, useState } from 'react'
import './Booked.css'
import axios from 'axios';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { FinishBooking } from '../DeleteDialog/FinishBooking';
import { DeleteBooking } from '../DeleteDialog/DeleteBooking';
import { ServiceContext } from '../../Context/ServiceContext';

const Deposited = () => {
  const [booked, setBooked] = useState([]);
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const { VND } = useContext(ServiceContext);




  const fetchUser = async () => {
    try {
      const data = await axios.get("https://bookingbithdayparty.azurewebsites.net/api/User",
        {
          withCredentials: true
        }
      );
      setUser(data.data.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchUser();
  }, []);



  const fetchBooked = async (id) => {
    try {
      const response = await axios.get(`https://bookingbithdayparty.azurewebsites.net/api/Booking/booking/${user.userId}`, {

        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true
      });
      setBooked(response.data.data);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (user) {
      fetchBooked(user.userId);
    }
  }, [user]);




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
      window.location.reload();
      return response.data;
    } catch (err) {
      console.log(err);
      return null;
    }
  }


  const fetchCustomerFinish = async (data) => {
    try {
      const response = await axios.put('https://bookingbithdayparty.azurewebsites.net/api/Booking/finishBooking', data,
        {
          headers: {
            "Content-Type": "application/json"
          },
          withCredentials: true,
        })
      console.log(response.data);
      // window.location.reload();

    } catch (err) {
      console.log(err);
      return null;
    }
  }




  const handleCancelClick = (bookingId) => {
    // window.confirm('Are you sure to cancel');
    fetchCustomerCancel(bookingId);
  }


  const handleClickFinish = (bookingId) => {
    // window.confirm('Are you sure to finish');
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
                    <FinishBooking handleClickFinish={() => handleClickFinish(Number(book.bookingId))} />
                    <DeleteBooking handleCancelClick={() => handleCancelClick(Number(book.bookingId))} />
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
                    <p>{VND.format(book.room.price)}</p>
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
                        <p>{VND.format(service.price)}</p>
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

export default Deposited