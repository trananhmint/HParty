import React from 'react'
import './PopularServices.css'
import all_services from '../Assets/all_service'
import Item from '../Item/Item'
export const PopularServices = () => {
    return (
        <div className='popular-services'>
            <h1>Popular Services</h1>
            <hr/>
            <div className="popular">
                {all_services.map((item, i) => {
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} place={item.place} />
                })}
            </div>
        </div>
    )
}

export default PopularServices;
