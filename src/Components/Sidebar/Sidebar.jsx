import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import './Sidebar.css';
import UserPieChart from '../Userpiechart/Userpiechart';
import ServiceBarChart from '../Servicebarchart/Servicebarchart';
import ContractPieChart from '../Contractpiechart/Contractpiechart';
import AdminHeader from '../Adminheader/Adminheader';
import AdminSideBar from '../Adminsidebar/Adminsidebar';
import AdminProfile from '../Adminprofile/Adminprofile';

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


export default function SideBar() {
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
      <Main open={open}>
      <div className="main-layout">
      <div className="chart-group">
        <UserPieChart className="user-pie-chart"  />
        <ServiceBarChart />
      </div>
      <ContractPieChart />
    </div>
      </Main>
    </Box>
  );
}