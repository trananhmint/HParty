import React from 'react'
import'./EventCollections.css'
import all_services from '../Assets/all_service'
import Item from '../Item/Item'
export const EventCollections = () => {
  return (
    <div className='event-collections'>
      <h1>Event</h1>
      <hr/>
      <div className="collections">
        {all_services.map((item,i)=>{
          return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} place={item.place} />
        })}
      </div>
    </div>
  )
}

export default EventCollections