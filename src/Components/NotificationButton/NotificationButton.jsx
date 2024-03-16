import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Popover from "@mui/material/Popover";
import Button from "@mui/material/Button";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { List, ListItem, ListItemText } from "@mui/material";
import axios from 'axios';
import party_logo from '../Assets/logo1.png'
import './NotificationButton.css'
import { fetchNoti } from "../../Context/fetchNoti";
// import { fetchNoti } from "../../Context/fetchNoti";

export default function NotificationButton() {

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


  // const fetchUserId = async () => {
  //   try {
  //     const response = await axios.get('https://bookingbithdayparty.azurewebsites.net/api/User', {
  //       withCredentials: true,
  //     });
  //     console.log(response);
  //     setItems(response.data.data);
  //   } catch (err) {
  //     console.error('Error fetching user ID:', err);
  //     throw err; // Rethrow the error to handle it further up the call stack
  //   }
  // }




  const [anchorEl, setAnchorEl] = React.useState(null);


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  // const notifications = [
  //   { title: 'Thông báo 1', description: 'Nội dung thông báo 1', datetime: new Date(), image: party_logo },
  //   { title: 'Thông báo 2', description: 'Nội dung thông báo 2', datetime: new Date(), image: '' },
  //   { title: 'Thông báo 3', description: 'Nội dung thông báo 3', datetime: new Date(), image: '' },
  // ];

  // Hàm xử lý khi một mục trong danh sách được nhấp vào
  const handleListItemClick = (notification) => {
    console.log("Clicked on:", notification.title);
    // Thực hiện các hành động khác ở đây nếu cần
  };

  return (
    <div className="notifcation-button">
      <Button aria-describedby={id} variant="contained" onClick={handleClick} >
        <NotificationsNoneIcon style={{ fontSize: '30px' }} />
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <List className="notification-list">
          {items.map((notification) => (
            <Link to="/notification" style={{ textDecoration: 'none' }}>
              <ListItem
                key={notification.notificationId}
                onClick={() => handleListItemClick(notification)} // Xử lý sự kiện khi một mục được nhấp vào
              >
                {/* <img src={party_logo} alt="" className="notification-image" style={{ width: '56px', height: 'auto', marginRight:'5px' }} /> */}
                <ListItemText
                  primaryTypographyProps={{ color: 'black', fontSize: '16px', fontWeight: '500' }}
                  primary={notification.title}
                  secondary={
                    <React.Fragment>
                      {notification.content}
                      <br />
                      {/* {notification.datetime.toLocaleString()} */}
                      {notification.sentTime}
                    </React.Fragment>}
                  secondaryTypographyProps={{ textDecoration: 'none' }}
                />

              </ListItem>
            </Link>
          ))}
        </List>
      </Popover>
    </div>
  );
}
