import React, { useState} from 'react';
import './Adminprofile-content.css'; // Import file CSS
import party_logo from '../Assets/logo1.png';
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
//import VisibilityIcon from '@mui/icons-material/Visibility';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const AdminProfileContent = () => {
 // const [showPassword, setShowPassword] = useState(false);

  // const togglePasswordVisibility = () => {
  //   setShowPassword(!showPassword);
  // };

  const [selectedImage, setSelectedImage] = useState(() => {
    // Try to get the image from localStorage on component mount
    const storedImage = localStorage.getItem('selectedImage');
    return storedImage || null;
  });

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setSelectedImage(reader.result);
        // Save the selected image to localStorage
        localStorage.setItem('selectedImage', reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  // Clear the stored image on component unmount
  // useEffect(() => {
  //   return () => {
  //     localStorage.removeItem('selectedImage');
  //   };
  // }, []);

  
  return (
    <Box sx={{ flexGrow: 1 }}>
     <div className="customer-profile-title">
          <h3>MY PROFILE INFORMATION</h3>
          <p>Manage your given information to protect account</p>
      </div>
      <hr />
    <Grid container spacing={1} columns={15}>
      <Grid xs={9}>
        <Item>
        <div className='customer-profile'>
            
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

        </Item>
      </Grid>
      <Grid xs={6} justifyContent = "center">
        <Item style={{ display: 'inline-table', justifyContent: 'center' }}>
          <Avatar
            alt=""
            src={selectedImage || party_logo}
            sx={{ 
            width: 233, 
            height: 233,
            margin: '0px 230px' 
            }}
          />
           <Button
      component="label"
      role={undefined}
      variant="outlined"
      tabIndex={-1}
      style={{
        color: '#555555', 
        borderColor: 'white',
        boxShadow: '#000000 0px 1px 1px 0px',
        marginTop: '5px'
      }}
    >
      Choose picture
      <VisuallyHiddenInput type="file" onChange={handleImageChange} />
    </Button>
    <div style={{fontSize: '20px', marginTop: '6px'}} >Maximum file size is 1 MB</div>
    <div style={{fontSize: '20px'}} >Format: .JPEG, .PNG</div>
        </Item>
      </Grid>
    </Grid>
  </Box>
  );
};

export default AdminProfileContent;
