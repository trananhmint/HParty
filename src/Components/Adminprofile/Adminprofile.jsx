import React from 'react';
import { styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import './Adminprofile.css';
import AdminProfileContent from '../Adminprofile-content/Adminprofile-content';
import AdminHeader from '../Adminheader/Adminheader';
import AdminSideBar from '../Adminsidebar/Adminsidebar';
const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);
  
export default function AdminProfile() {
  const [open, setOpen] = React.useState(false);

    
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex'}} >
      <CssBaseline />
      <AdminHeader open={open} handleDrawerOpen={handleDrawerOpen}/>
      <AdminSideBar open={open} handleDrawerClose={handleDrawerClose} />
      {/* <Main open={open}>
      <div className='admin-profile-content'>
      <AdminProfileContent/>
      </div>
      </Main> */}
    </Box>
  );
}