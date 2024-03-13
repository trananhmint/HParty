import React, { useEffect, useState } from 'react'
import './AddressDisplay.css'
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import Chip from '@mui/material/Chip';
import axios from 'axios';
export const AddressDisplay = () => {

    const [user, setUser] = useState([]);


    const fetchUserAddress = async () => {
      try {
        const response = await axios.get('https://bookingbithdayparty.azurewebsites.net/api/User',
          {
            withCredentials: true,
          }
        )
        setUser(response.data.data);
        console.log(response.data.data);
      } catch (err) {
        console.log(err);
      }
    }
  
    useEffect(() => {
      fetchUserAddress();
    }, []);


    return (
        <div className='address-display'>
            <p> <PlaceOutlinedIcon/> Address</p>
            <div className="address-display-name-phone-address">
                <div className="address-display-name-phone">
                    <p>{user.fullName}</p>
                    <p>(+84)707158436</p>
                </div>
                <div className="address-display-address">
                    <p>{user.address}</p>
                    <Chip className='address-display-address-chip' 
                    label='Default' variant='outlined' 
                    style={{width:'150px', height: '30px' ,marginTop:'15px', borderRadius:'5px', border:'1px solid #dba81a', color:'#dba81a', fontSize:'15px', cursor:'pointer'}}/>
                </div>
                <div className="address-display-button">
                    <button>Change Address</button>
                </div>
            </div>
        </div>
    )
}

export default AddressDisplay