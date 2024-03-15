import React, { useState, useEffect } from 'react';
import './AdminCustCount.css'
import Groups2Icon from '@mui/icons-material/Groups2';
import axios from 'axios';



export default function AdminCustCount() {
    const [items, setItems] = useState([]);
    const [customer, setCustomer] = useState(0);
  
  
    const fetchData = async () => {
      try {
        const data = await axios.get('https://bookingbithdayparty.azurewebsites.net/api/users',
          {
            withCredentials: true,
          });
        console.log(data);
        setItems(data.data.data);
  
      } catch (err) {
        console.log(err);
      }
  
    }
  
  
  
    useEffect(() => {
      fetchData();
    }, []);


  useEffect(() => {

    const customers = items.filter (user => user.roleId === 1).length;
    setCustomer(customers);
  }, [items]);

  return (
    <div className="chart-container">
      <div className="chart-wrapper">
      <Groups2Icon fontSize='large' style={{color: '#D2691E'}}/>
        <p style={{fontSize: '36px'}}>{customer}</p>
        <span style={{fontSize: '24px'}}>   Customers</span>
      </div>
    </div>
  );
}