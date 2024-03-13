import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import './CSS/HostServices.css'
import HostHeader from '../Components/HostHeader/HostHeader';
import HostSideBar from '../Components/HostSideBar/HostSideBar';
import { HostServiceTable } from '../Components/HostServiceTable/HostServiceTable';

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


const name = localStorage.getItem('email');
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export const HostServices = () => {
    const [open, setOpen] = React.useState(false);


    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (
        <Box sx={{ display: 'flex' }} >
            <CssBaseline />
            <HostHeader open={open} handleDrawerOpen={handleDrawerOpen} />
            <HostSideBar open={open} handleDrawerClose={handleDrawerClose} />

            <Main open={open}>
                <div className='host-services-table'>
                    <HostServiceTable />
                </div>

            </Main>
        </Box>
    )
}

