import React from 'react';
import { Paper, Typography, List, ListItem, ListItemText } from '@mui/material';
import './CSS/Notification.css'
import cakes from '../Components/Assets/Cakes.jpg';

const notifications = [
  { title: 'Thông báo 1', description: 'Nội dung thông báo 1' },
  { title: 'Thông báo 2', description: 'Nội dung thông báo 2' },
  { title: 'Thông báo 3', description: 'Nội dung thông báo 3' },
];

const Notification = () => {
  return (
    <Paper className="notification-root" style={{ backgroundImage: `url(${cakes})`}}> {/* Sử dụng class từ file CSS */}
      <Typography variant="h4" gutterBottom className="notification-title"> {/* Sử dụng class từ file CSS */}
        NOTIFICATIONS
      </Typography>
      <List className="notification-list"> {/* Sử dụng class từ file CSS */}
        {notifications.map((notification, index) => (
          <ListItem key={index} className="notification-item"> {/* Sử dụng class từ file CSS */}
            <ListItemText
              primary={notification.title}
              secondary={notification.description}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default Notification;