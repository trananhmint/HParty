import React from 'react'
import './BookedServiceTabs.css'

import { Box, Tab } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { HostDepositedBooking } from './HostDepositedBooking';
import { HostFinishedBooking } from './HostFinishedBooking';
import { HostCancelledBooking } from './HostCancelledBooking';

export const HostBookingTabs = () => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };



    return (
        <div className="bookedservicetabs">
            <Box sx={{ width: '100%', typography: 'body1', }}>
                <TabContext value={value} >
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }} >

                        <TabList onChange={handleChange} aria-label="lab API tabs example" style={{ color: '#f5a02c', borderBottom: '1px solid' }}>
                            <Tab label="Deposited" value="1" style={{ fontSize: '20px' }} />
                            <Tab label="Finished" value="2" style={{ fontSize: '20px' }} />
                            <Tab label="Cancelled" value="3" style={{ fontSize: '20px' }} />
                            {/* <Tab label="Finished" value="4" style={{fontSize: '20px'}} />
                            <Tab label="Cancel" value="5" style={{fontSize: '20px'}} /> */}

                        </TabList>
                    </Box>
                    <TabPanel value="1"><HostDepositedBooking /> </TabPanel>
                    <TabPanel value="2"><HostFinishedBooking /></TabPanel>
                    <TabPanel value="3"><HostCancelledBooking /> </TabPanel>
                    {/* <TabPanel value="3"><Booked /></TabPanel>
                    <TabPanel value="4"><Finished /></TabPanel> */}
                    {/* <TabPanel value="4"><Cancel /></TabPanel> */}

                </TabContext>
            </Box>
        </div>
    )
}

