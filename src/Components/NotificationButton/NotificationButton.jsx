import * as React from "react";
import { Link } from 'react-router-dom';
import Popover from "@mui/material/Popover";
import Button from "@mui/material/Button";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { List, ListItem, ListItemText } from "@mui/material";
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
    { title: "Notification 1", description: "Description for notification 1" },
    { title: "Notification 2", description: "Description for notification 2" },
    // Thêm các thông báo khác nếu cần
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
        <List>
          {notifications.map((notification, index) => (
            
            <ListItem
              key={index}
              button // Đặt thuộc tính button để tạo một nút nhấn từ ListItem
              onClick={() => handleListItemClick(notification)} // Xử lý sự kiện khi một mục được nhấp vào
            >
            <Link to="/notification">
              <ListItemText
                primary={notification.title}
                secondary={notification.description}
              />
              </Link>
            </ListItem>
          ))}
        </List>
      </Popover>
    </div>
  );
}
