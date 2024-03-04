import React from 'react'
import './BookedServiceTabs.css'

import { Box, Tab } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import Confirm from './Confirm'
import Booked from './Booked'
import Cancel from './Cancel'
import All from './All'
import Finished from './Finished'


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

                        <TabList onChange={handleChange} aria-label="lab API tabs example"  style={{color: '#f5a02c', borderBottom: '1px solid'}}>
                            <Tab label="All" value="1" style={{fontSize: '20px'}} />
                            <Tab label="Confirm" value="2" style={{fontSize: '20px'}} />
                            <Tab label="Booked" value="3" style={{fontSize: '20px'}} />
                            <Tab label="Finished" value="4" style={{fontSize: '20px'}} />
                            <Tab label="Cancel" value="5" style={{fontSize: '20px'}} />
                            
                        </TabList>
                    </Box>
                    <TabPanel value='1'><All/> </TabPanel>
                    <TabPanel value="2"><Confirm /> </TabPanel>
                    <TabPanel value="3"><Booked /></TabPanel>
                    <TabPanel value="4"><Finished /></TabPanel>
                    <TabPanel value="5"><Cancel /></TabPanel>
                    
                </TabContext>
            </Box>
        </div>
    )
}

export default BookedServiceTabs