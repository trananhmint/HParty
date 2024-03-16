import React, { useState, useEffect } from 'react';
import './AdminHostCount.css'
import StorefrontIcon from '@mui/icons-material/Storefront';
import axios from 'axios';



export default function AdminHostCount() {
    const [items, setItems] = useState([]);
    const [host, setHost] = useState('');
  
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

    const hosts = items.filter (user => user.role.roleId === 2).length;
    setHost(hosts);
  }, [items]);

  return (
    <div className="chart-container">
      <div className="chart-wrapper">
      <StorefrontIcon fontSize='large' style={{color: '#D2691E'}}/>
        <p style={{fontSize: '36px'}}>{host}</p>
        <span style={{fontSize: '24px'}}>   Party Hosts</span>
      </div>
    </div>
  );
}