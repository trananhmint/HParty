import React, { useEffect, useState } from 'react'
import './Booked.css'
import axios from 'axios';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

const Confirm = () => {
  const [booked, setBooked] = useState([]);
  const [bookingDetail, setBookingDetail] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [services, setServices] = useState([]);
  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  const fetchBooked = async () => {
    try {
      const response = await axios.get('https://bookingbirthdayparties.azurewebsites.net/api/Booking');
      setBooked(response.data.data);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchBooked();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const bookingIds = booked.map(booking => booking.bookingId);
      const bookingDetails = await Promise.all(bookingIds.map(id => fetchBookingDetail(id)));
      setBookingDetail(bookingDetails);
    };

    if (booked.length > 0) {
      fetchData();
    }
  }, [booked]);

  const fetchBookingDetail = async (bookingId) => {
    try {
      const response = await axios.get(`https://bookingbirthdayparties.azurewebsites.net/api/Booking/bookingdetails?bookingId=${bookingId}`);
      return response.data.data;
    } catch (err) {
      console.log(err);
      return null;
    }
  };

  console.log("Booked:", booked)
  console.log("Booking Detail:", bookingDetail);


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
    <div className='confirm'>
      {booked.map((book, index) => {
        if (book.status === "PENDING") {
          return <div>
            <div className="booked">
              <div className="booked-info">
              <p>ID: {index + 1}</p>
                <div className="booked-status">
                  <p>{book.status}</p>
                  <hr />
                  <p>{getDateTime(book.bookingDate)}</p>
                  <hr />
                  <button id='cancel'><CancelOutlinedIcon /></button>
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

export default Confirm