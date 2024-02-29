import React from 'react';
import { Link } from 'react-router-dom';
import { styled} from '@mui/material/styles';
import { Avatar } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationButton from '../NotificationButton/NotificationButton';
import './Adminheader.css';
import party_logo from '../Assets/logo1.png'
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
  return (
      <AppBar position="fixed" open={open} style={{background: '#e7c494'}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Link to="/admin">
          <Avatar
          alt=""
          src={party_logo}
          sx={{ width: 56, height: 56 }}/>
          </Link>
          <Typography variant="h6" noWrap component="div">
          HPARTY
          </Typography>
          <div style={{ marginLeft: 'auto' }}>
            <NotificationButton classname="noti-button" />
          </div>
        </Toolbar>
      </AppBar>
  )
}
export default AdminHeader;