import React, { useState, useEffect } from 'react';
import { Typography, List, ListItem, ListItemText, Button} from '@mui/material';
import './NotificationContent.css';
import party_logo from '../Assets/logo1.png'
const notifications = [
    { title: 'Thông báo 1', description: 'Nội dung thông báo 1', datetime:  new Date(), image: party_logo },
    { title: 'Thông báo 2', description: 'Nội dung thông báo 2',datetime:  new Date(), image:'' },
    { title: 'Thông báo 3', description: 'Nội dung thông báo 3',datetime:  new Date(), image:'' },
  ];
  const NotificationContent = () => {
    return (
        <div className="notification-root">
        <Typography variant="h4" gutterBottom className="notification-title" > {/* Sử dụng class từ file CSS */}
          NOTIFICATIONS
        </Typography>
        <List className="notification-list"> {/* Sử dụng class từ file CSS */}
          {notifications.map((notification, index) => (
            <ListItem key={index} className="notification-item"> {/* Sử dụng class từ file CSS */}
            <img src={notification.image} alt="" className="notification-image"/>
              <ListItemText
                primaryTypographyProps={{ variant: 'h6', fontWeight: '600' }}
                primary={notification.title}
                secondary={
                    <React.Fragment>
                        {notification.description}
                        <br/>
                        {notification.datetime.toLocaleString()}
                    </React.Fragment>
                                        }
                secondaryTypographyProps={{fontSize:'16'}}
                />
              <Button variant="contained" size="medium" style={{ background: 'white', color: 'black' }}>
                Xem chi tiết
              </Button>
            </ListItem>
          ))}
        </List>
    </div>
  );
  };
  
  export default NotificationContent;
