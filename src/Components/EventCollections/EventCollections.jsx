import React, { useEffect, useState } from 'react'
import  './EventCollections.css'
import all_services from '../Assets/events'
import Item from '../Item/Item'
import { fetchService } from '../../Context/fetchService'
export const EventCollections = () => {

  const [items, setItems] = useState([]);

  const fetchData = async () => {
    try {
      const data = await fetchService();
      setItems(data.data.data);
    } catch (err) {
      console.log(err);
    }
  const fetchData = async () => {
    try {
      const data = await fetchService();
      setItems(data.data.data);
      console.log(data.data.data);
    } catch (err) {
      console.log(err);
    }

  }
  }


  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className='event-collections'>
      <h1>Event</h1>
      <hr  />
      <div className="collections">
        {items.map((item, i) => {
          if ( 12 < i) {
            return <Item key={i} id={item.serviceId} serviceName={item.serviceName} price={item.price} sale_Price={item.sale_Price} description={item.description} status={item.status} userId={item.userId} categoryId={item.categoryId} />
          }else{
            return null;
          }

        })}
      </div>
    </div>
  )
}

export default EventCollections