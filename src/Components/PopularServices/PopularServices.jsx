import React, { useEffect, useState } from 'react'
import './PopularServices.css'
import Item from '../Item/Item'
import axios from 'axios'
import { FeaturedVideoRounded } from '@mui/icons-material'
import { FetchProduct } from '../../Context/fetchData'
export const PopularServices = () => {


    const [items, setItems] = useState([]);

    const fetchData = async () => {
        try {
            const data = await axios.get('https://bookingbirthdayparties.azurewebsites.net/api/Service/services');
            setItems(data.data.data);
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
                    if (i <= 4) {
                        return <Item key={i} id={item.serviceId} serviceName={item.serviceName} price={item.price} sale_Price={item.sale_Price} description={item.description} status={item.status} userId={item.userId} categoryId={item.categoryId} />
                    }else{
                        return null;
                    }

                })}
            </div>
        </div>
    )
}

export default PopularServices;