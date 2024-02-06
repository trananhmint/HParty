import React from 'react';
import { styled} from '@mui/material/styles';
import { Avatar } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import './Adminheader.css';
import logo from '../Assets/BirthdayLogo1.png';
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
      <AppBar position="fixed" open={open} style={{background: '#DEB887'}}>
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
          <Avatar
        alt=""
        src={logo}
        sx={{ width: 56, height: 56 }}/>
          <Typography variant="h6" noWrap component="div">
          HPARTY
          </Typography>
        </Toolbar>
      </AppBar>
  )
}
export default AdminHeader;