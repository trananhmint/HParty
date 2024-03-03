import React, { useState} from 'react';
import './Adminprofile-content.css'; // Import file CSS
import party_logo from '../Assets/logo1.png';
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { Button } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';

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
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

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
     <div>
      <h1 className="admin-profile-header">Admin Profile</h1>
      <h4 style={{color: '#555555'}}>Manage profile information for account security</h4>
      <hr/>
      </div>
    <Grid container spacing={1} columns={15}>
      <Grid xs={9}>
        <Item>
          <div className="admin-profile-info">
            <div className="admin-profile-content-wrapper">
              <label className="admin-profile-content">
                Name:  <span style={{ fontWeight: "500" }}>Vo Nguyen Trung Hai</span>
              </label>
               
             
              <label className="admin-profile-content">
                Role: <span style={{ fontWeight: "500" }}>Admin</span>
                </label>
                
             
              <label className="admin-profile-content">
                Address: <span style={{ fontWeight: "500" }}>
                  Thanh pho Ho Chi Minh
                </span>
                </label>
                
             
              <label className="admin-profile-content">
                Phone: <span style={{ fontWeight: "500" }}>0839839437</span>
                </label>
                
             
              <label className="admin-profile-content">
                Email: <span style={{ fontWeight: "500" }}>chunhai27032003@gmail.com</span>
              </label>
                
            
              <label className="admin-profile-content">
            Password:   <span style={{fontWeight: '500'}}>{showPassword ? '27032003' : ' ••••••••••'}</span>
            {/* <button className="admin-profile-button" onClick={togglePasswordVisibility}>
              {showPassword ? 'Hide Password' : 'Show Password'}
            </button> */}
            <VisibilityIcon onClick={togglePasswordVisibility} style={{marginLeft: '10px'}}/>
            </label>
            <Button variant='outlined' style=
            {{
              background: '#e7c494', 
              color: 'white', 
              borderColor: 'white', 
              float: 'left',
              marginTop: '10px',
              marginLeft: '20px'
            }}
            >Change Password</Button>
            </div>
            {/* <div className="admin-profile-buttons"> */}
              {/* <button className="admin-profile-button">Log out</button>
              <button className="admin-profile-button">Payment</button>
              <button className="admin-profile-button">Booked Service</button> */}
              
            {/* </div> */}
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
