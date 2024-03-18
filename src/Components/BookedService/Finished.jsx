import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { ServiceContext } from '../../Context/ServiceContext';

const Finished = () => {

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
      const response = await axios.get(`https://bookingbithdayparty.azurewebsites.net/api/Booking/booking/${id}`, {
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
        if (book.status === "FINISHED") {
          return <div>
            <div className="booked">
              <div className="booked-info">
                <p>No. {index + 1}</p>
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

export default Finished