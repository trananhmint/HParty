import React, { useState, useEffect } from "react";
import { Typography, List, ListItem, ListItemText, Button} from '@mui/material';
import './NotificationContent.css';
// import party_logo from '../Assets/logo1.png';
import axios from 'axios';
import { fetchNoti } from "../../Context/fetchNoti";

  const NotificationContent = () => {

    const [user, setUser] = useState();
    const [items, setItems] = useState([]);

  const fetchUser = async () => {
    try {
      const response = await axios.get('https://bookingbithdayparty.azurewebsites.net/api/User', {
        withCredentials: true,
      });
      console.log(response);
      setUser(response.data.data);
    } catch (err) {
      console.error('Error fetching user ID:', err);
      throw err; // Rethrow the error to handle it further up the call stack
    }
  }

  const fetchData = async (id) => {
    try {
      const data = await fetchNoti(id)
      setItems(data.data.data);
      console.log(data.data.data);
    } catch (err) {
      console.log(err);
    }

  }

  useEffect(() => {
    fetchUser();
  }, []);

  useEffect(() => {
    if (user) {
      fetchData(user.userId);
    }
  }, [user]);


    return (
        <div className="notification-root">
        <Typography variant="h4" gutterBottom className="notification-title" > {/* Sử dụng class từ file CSS */}
          NOTIFICATIONS
        </Typography>
        <List className="notification-list"> {/* Sử dụng class từ file CSS */}
          {items.map((notification, index) => (
            <ListItem key={index} className="notification-item"> {/* Sử dụng class từ file CSS */}
            {/* <img src={notification.image} alt="" className="notification-image"/> */}
              <ListItemText
                primaryTypographyProps={{ variant: 'h6', fontWeight: '600' }}
                primary={notification.title}
                secondary={
                    <React.Fragment>
                        {notification.content}
                        <br/>
                        {/* {notification.datetime.toLocaleString()} */}
                        {notification.sentTime}
                    </React.Fragment>
                                        }
                secondaryTypographyProps={{fontSize:'16'}}
                />
              <Button variant="contained" size="medium" style={{ 
                background: 'white', 
                color: 'black', 
                fontSize:'15px', 
                borderRadius:'1px', 
                marginLeft:'20px',
                boxShadow: '1px 1px black' }}>
                Xem chi tiết
              </Button>
            </ListItem>
          ))}
        </List>
    </div>
  );
  };

  export default NotificationContent;