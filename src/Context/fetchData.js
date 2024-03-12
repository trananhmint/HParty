
import React, { useEffect, useState } from 'react'
import axios from 'axios';


const FetchProduct = () => {
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

    return items;

}
export { FetchProduct };