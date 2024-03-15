import React, { useEffect, useState } from 'react'
import './PopularServices.css'
import Item from '../Item/Item'
import { fetchService } from '../../Context/fetchService'
export const PopularServices = () => {


    const [items, setItems] = useState([]);

    const fetchData = async () => {
        try {

            const data = await fetchService()
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
                {items.map((item, index) => {
                    if (11 <= index  && item.status === 1) {
                        return <Item key={index} id={item.serviceId} serviceName={item.serviceName} price={item.price} sale_Price={item.sale_Price} description={item.description} status={item.status} userId={item.userId} categoryId={item.categoryId} images={item.images} />
                    } else {
                        return null;
                    }

                })}
            </div>
        </div>
    )
}

export default PopularServices;