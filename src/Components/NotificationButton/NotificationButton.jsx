import * as React from "react";
import { Link } from 'react-router-dom';
import Popover from "@mui/material/Popover";
import Button from "@mui/material/Button";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { List, ListItem, ListItemText } from "@mui/material";
import party_logo from '../Assets/logo1.png'
import './NotificationButton.css'

export default function NotificationButton() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const notifications = [
    { title: 'Thông báo 1', description: 'Nội dung thông báo 1', datetime:  new Date(), image: party_logo },
    { title: 'Thông báo 2', description: 'Nội dung thông báo 2',datetime:  new Date(), image:'' },
    { title: 'Thông báo 3', description: 'Nội dung thông báo 3',datetime:  new Date(), image:'' },
  ];

  // Hàm xử lý khi một mục trong danh sách được nhấp vào
  const handleListItemClick = (notification) => {
    console.log("Clicked on:", notification.title);
    // Thực hiện các hành động khác ở đây nếu cần
  };

  return (
    <div className="notifcation-button">
      <Button aria-describedby={id} variant="contained" onClick={handleClick} >
      <NotificationsNoneIcon style={{fontSize:'30px'}}/>
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
          {notifications.map((notification, index) => (
            <Link to="/notification" style={{textDecoration:'none'}}>
            <ListItem
              key={index}
              onClick={() => handleListItemClick(notification)} // Xử lý sự kiện khi một mục được nhấp vào
            >
            <img src={notification.image} alt="" className="notification-image" style={{width:'56px', height:'auto'}}/>
              <ListItemText
              primaryTypographyProps={{color: 'black', fontSize:'16px', fontWeight:'500'}}
                 primary={notification.title}
                secondary={
                    <React.Fragment>
                        {notification.description}
                        <br/>
                        {notification.datetime.toLocaleString()}
                    </React.Fragment>}
              secondaryTypographyProps={{textDecoration: 'none'}}
              />
             
            </ListItem>
            </Link>
          ))}
        </List>
      </Popover>
    </div>
  );
}
