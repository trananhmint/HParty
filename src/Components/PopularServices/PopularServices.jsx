import React, { useEffect, useState } from 'react'
import './PopularServices.css'
import all_services from '../Assets/events'
import Item from '../Item/Item'
import { fetchService } from '../../Context/fetchService'
import axios from 'axios'
export const PopularServices = () => {


    const [items, setItems] = useState([]);

    const fetchData = async () => {
        try {
            const data = await axios.get('https://bookingbirthdayparties.azurewebsites.net/api/Service/services');
            console.log(data.data.data)
            setItems(data.data.data);
            console.log(data.data.data);
        } catch (err) {
            console.log(err);
        }

    }


    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className='popular-services'>
            <h1>Popular Services</h1>
            <hr />
            <div className="popular">
                {items.map((item, i) => {
                    // console.log(item);
                    return <Item key={i} id={item.serviceId} serviceName={item.serviceName} price={item.price} sale_Price={item.sale_Price} description={item.description} status={item.status} userId={item.userId} categoryId={item.categoryId} />
                })}
            </div>
        </div>
    )
}

export default PopularServices;
