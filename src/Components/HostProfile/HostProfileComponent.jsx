import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './HostProfileComponent.css';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Avatar, Button, Grid } from '@mui/material';
import party_logo from '../Assets/logo1.png';
import { toast } from 'react-toastify';
import axios from 'axios';

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




export const HostProfileComponent = () => {


    const [user, setUser] = useState([]);
    const fetchUser = async () => {
        try {
            const response = await axios.get('https://bookingbithdayparty.azurewebsites.net/api/User',
                {
                    withCredentials: true,
                }
            )
            setUser(response.data.data);
            console.log(response.data.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchUser();
    }, []);
    console.log(user.fullName);
    const [updateUser, setUpdateUser] = React.useState({
        UserId: user.userId,
        FullName: user.fullName,
        Email: user.email,
        Phone: user.phone,
        Address: user.address,
    })

    const [selectedImage, setSelectedImage] = useState(() => {
        // Try to get the image from localStorage on component mount
        const storedImage = localStorage.getItem('selectedImage');
        return storedImage || null;
    });

    const fetchUpdateUser = async (updateUser) => {
        try {
            const formData = new FormData();
            // // Thêm các trường dữ liệu khác nếu cần
            formData.append("UserId", updateUser.UserId);
            formData.append('FullName', updateUser.FullName);
            formData.append('Email', updateUser.Email);
            formData.append('Phone', updateUser.Phone);
            formData.append('Images', updateUser.Images);
            console.log([...formData]);
            console.log(formData);

            const response = await axios.put(`https://bookingbithdayparty.azurewebsites.net/api/User/${updateUser.UserId}`, formData,
                {
                    headers: { "Content-Type": "multipart/form-data" },
                    // withCredentials: true,
                });
            console.log(response.data)
            toast.success('Update Successfully', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            window.location.reload();


            // Trả về dữ liệu từ phản hồi của API sau khi gửi yêu cầu PUT
        } catch (error) {
            console.error('Error updating service:', error);
            throw error; // Ném lỗi để xử lý ở phía gọi hàm
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();
        fetchUpdateUser(updateUser)
    }

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

    return (
        <Box sx={{ flexGrow: 1 }}
            style={{
                // margin: '0px auto',
                // width: '100%',
                // boxShadow: '0px 0px 10px 5px #e5e5e5',
                // padding: '20px',
                marginTop: '100px'
            }}
            component="form"
            noValidate
            autoComplete="off"
            onSubmit={onSubmit}
        >
            <div className="host-profile-title">
                <h3>MY PROFILE INFORMATION</h3>
                <p>Manage your given information to protect account</p>
            </div>
            <hr />
            <Grid container spacing={0} columns={12} style={{

            }}>
                <Grid xs={6} style={{
                    boxShadow: 'none',
                    boxRadius: '0'
                }}>
                    <Item style={{
                        boxShadow: 'none',
                        boxRadius: '0'
                    }}>
                        <div className='host-profile'>
                            <div className='host-profile-list host-profile-name'>
                                <TextField id="outlined-basic" label="Full Name" name="FullName" variant="outlined" style={{ width: "500px", fontSize: '20px' }} defaultValue={user.fullName} />
                            </div>

                            <div className=' host-profile-list host-profile-email'>
                                <TextField type='email' id="outlined-basic" label="Email" name="Email" variant="outlined" style={{ width: "500px", fontSize: '20px' }} defaultValue={user.email} />
                            </div>

                            <div className='host-profile-list host-profile-phone-number'>
                                <TextField id="outlined-basic" label="Phone Number" name="Phone" variant="outlined" style={{ width: "500px", fontSize: '20px' }} defaultValue={user.phone} />
                            </div>
                            <div className="host-profile-button">
                                <button style={{ backgroundColor: "#f5a02c" }}>Save</button>
                            </div>

                        </div>

                    </Item>
                </Grid>
                <Grid xs={6} justifyContent="center" style={{ marginTop: '120px' }}>
                    <Item style={{
                        display: 'grid',
                        justifyContent: 'center',
                        boxShadow: 'none',
                        boxRadius: '0'
                    }}>
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
                                marginTop: '20px',
                                width: '200px',
                                marginLeft: '240px'
                            }}
                        >
                            Choose picture
                            <VisuallyHiddenInput type="file" onChange={handleImageChange} />
                        </Button>
                        <div style={{ fontSize: '20px', marginTop: '6px' }} >Maximum file size is 1 MB</div>
                        <div style={{ fontSize: '20px' }} >Format: .JPEG, .PNG</div>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    )
}

export default HostProfileComponent;
