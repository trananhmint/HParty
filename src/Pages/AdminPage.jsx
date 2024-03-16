import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import './CSS/AdminPage.css';
import UserPieChart from '../Components/Userpiechart/Userpiechart';
import AdminHeader from '../Components/Adminheader/Adminheader';
import AdminSideBar from '../Components/Adminsidebar/Adminsidebar';
import ServicePieChart from '../Components/ServicePieChart/ServicePiechart';
import AdminRevenue from '../Components/AdminRevenue/AdminRevenue';
import AdminCustCount from '../Components/AdminUserCount/AdminCustCount';
import AdminHostCount from '../Components/AdminHostCount/AdminHostCount';

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


export default function AdminPage() {
  const [open, setOpen] = React.useState(true);


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }} >
      <CssBaseline />
      <AdminHeader open={open} handleDrawerOpen={handleDrawerOpen} />
      <AdminSideBar open={open} handleDrawerClose={handleDrawerClose} /> 

      <Main open={open}>
        <div className="main-layout">
        <div className='statistic-group'>
        <AdminRevenue className="revenue"/> 
        <AdminCustCount/>
        <AdminHostCount/>
        </div>
          <div className="chart-group">
            <UserPieChart className="user-pie-chart" />
            <ServicePieChart/>
          </div>
        </div>
      </Main>
    </Box>
  );
}