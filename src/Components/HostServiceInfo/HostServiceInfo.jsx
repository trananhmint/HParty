import React from 'react'

import './HostServiceInfo.css'
import users from '../Assets/users.png'
import { Avatar, Rating } from '@mui/material'



const HostServiceInfo = (props) => {
    const { service } = props;
    // console.log(service.serviceName);
    let user = "";
    if(service.user) {
        user = service.user;
        console.log(user);
    }
    console.log(service.roomName);
    
    return (
        <div className='hostserviceinfo'>
            <div className="hostserviceinfo-avatar">
                <Avatar alt="Remy Sharp" src={users} style={{ width: '70px', height: '70px', border: '1px solid black' }} />
            </div>
            <div className="hostserviceinfo-info">
                <p className="hostname">{user.fullName}</p>
                <p className="hostlocation">Ho Chi Minh City</p>
            </div>
            <hr />
            <div className="hostserviceinfo-rating">
                <p className='hostserviceinfo-title'>Rating</p>
                <Rating name="half-rating" defaultValue={3.5} precision={0.5} readOnly />
            </div>
            <hr />
            <div className="hostserviceinfo-services">
                <p className='hostserviceinfo-title'>Services</p>
                <p className='hostserviceinfo-content'>100</p>
            </div>
            <hr />
            <div className="hostserviceinfo-hotline">
                <p className='hostserviceinfo-title'>Hotline</p>
                <p className='hostserviceinfo-content'>(+84) 987 654 321</p>
            </div>
            <hr />
            <div className="hostserviceinfo-email">
                <p className='hostserviceinfo-title'>Email</p>
                <p className='hostserviceinfo-content'>{user.email}</p>
            </div>

        </div>
    )
}

export default HostServiceInfo