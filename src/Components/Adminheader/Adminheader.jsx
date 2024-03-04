import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Avatar } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationButton from '../NotificationButton/NotificationButton';
import './Adminheader.css';
import party_logo from '../Assets/logo1.png'
import './Adminheader.css';
import Cookies from 'universal-cookie';
import { useAuth } from '../../Context/AuthProvider';
const drawerWidth = 240;
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const AdminHeader = ({ open, handleDrawerOpen }) => {


  const auth = useAuth();
  const cookies = new Cookies();
  let token = cookies.get("authToken");
  return (
    <AppBar position="fixed" open={open} style={{ background: '#e7c494' }}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{ mr: 2, ...(open && { display: 'none' }) }}
        >
          <MenuIcon style={{ width: "100px", height: "40px" }} />
        </IconButton>
        <Link to="/admin" style={{ textDecoration: "none" }}>
          <div className="admin-appbar">
            <Avatar
              alt=""
              src={party_logo}
              sx={{ width: '90px', height: '90px' }}
            />

            <Typography variant="h6" noWrap component="div">
              HPARTY
            </Typography>
          </div>
        </Link>

        <div className="admin-header-noti-logout" style={{ marginLeft: 'auto' }}>
          <div className="admin-header-button">
            <button onClick={() => auth.logOut()} className='logout'>Log Out</button>
          </div>
          <NotificationButton classname="noti-button" />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default AdminHeader;
