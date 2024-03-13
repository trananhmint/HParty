import React from 'react'
import './BookedServiceTabs.css'

import { Box, Tab } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import Confirm from './Confirm'
import Booked from './Booked'
import Cancel from './Cancel'
import All from './Deposited'
import Finished from './Finished'
import Deposited from './Deposited'


const BookedServiceTabs = () => {

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
                    <TabPanel value="1"><Deposited /> </TabPanel>
                    <TabPanel value="2"><Finished /> </TabPanel>
                    {/* <TabPanel value="3"><Booked /></TabPanel>
                    <TabPanel value="4"><Finished /></TabPanel> */}
                    <TabPanel value="3"><Cancel /></TabPanel>

                </TabContext>
            </Box>
        </div>
    )
}

export default BookedServiceTabs