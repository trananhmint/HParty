import React, { useEffect, useState } from 'react'
import './EventCollections.css'
import all_services from '../Assets/events'
import Item from '../Item/Item'
import { fetchService } from '../../Context/fetchService'
import axios from 'axios'
export const EventCollections = () => {

  const [items, setItems] = useState([]);

  const fetchData = async () => {
    try {
      const data = await axios.get('https://bookingbithdayparty.azurewebsites.net/api/Service/services');
      setItems(data.data.data);
    } catch (err) {
      console.log(err);
    }

  }


  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='event-collections'>
      <h1>Event</h1>
      <hr />
      <div className="collections">
        {items.map((item, index) => {
          console.log(index);
          if (index <= 4 && item.status === 1) {
            return <Item key={index} id={item.serviceId} serviceName={item.serviceName} price={item.price} sale_Price={item.sale_Price} description={item.description} status={item.status} userId={item.userId} categoryId={item.categoryId} images={item.images} />
          } else {
            return null;
          }

        })}
      </div>
    </div>
  )
}

export default EventCollections