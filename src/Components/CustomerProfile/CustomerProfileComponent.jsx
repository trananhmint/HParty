import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './CustomerProfileComponent.css'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export const CustomerProfileComponent = () => {
    return (
        <div className='customer-profile'>
            <div className="customer-profile-title">
                <h3>MY PROFILE INFORMATION</h3>
                <p>Manage your given information to protect account</p>
            </div>
            <hr />
            <div className='customer-profile-list customer-profile-login-name'>
                <p>Login Name: </p>
                <TextField id="outlined-basic" label="Login Name" variant="outlined" style={{ width: "500px" }} />
            </div>

            <div className='customer-profile-list customer-profile-name'>
                <p>Name: </p>
                <TextField id="outlined-basic" label="Name" variant="outlined" style={{ width: "500px" }} />
            </div>

            <div className=' customer-profile-list customer-profile-email'>
                <p>Email: </p>
                <TextField type='email' id="outlined-basic" label="Email" variant="outlined" style={{ width: "500px" }} />
            </div>

            <div className='customer-profile-list customer-profile-phone-number'>
                <p>Phone Number: </p>
                <TextField id="outlined-basic" label="Phone Number" variant="outlined" style={{ width: "500px" }} />
            </div>

            <div className='customer-profile-list customer-profile-gender'>
                {/* <p>Gender: </p> */}
                <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                    >
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>
                </FormControl>
            </div>

            <div className='customer-profile-list customer-profile-birthday'>
                <p>Birth Date: </p>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker style={{ width: "500px" }} />
                </LocalizationProvider>
            </div>
            <div className="customer-profile-button">
                <button>Submit</button>
            </div>

        </div>
    )
}

export default CustomerProfileComponent;