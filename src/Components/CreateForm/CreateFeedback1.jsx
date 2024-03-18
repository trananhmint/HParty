import axios from 'axios'
import React, { useEffect } from 'react'
import { toast } from 'react-toastify';
import Rating from '@mui/material/Rating';
import { Box } from '@mui/material';
import { useState } from 'react';
import TextField from '@mui/material/TextField';




const CreateFeedback1 = () => {

    const [user, setUser] = useState();

    const fetchUser = async () => {
        try {
            const data = await axios.get("https://bookingbithdayparty.azurewebsites.net/api/User",
                {
                    withCredentials: true
                }
            );
            setUser(data.data.data);
        } catch (err) {
            console.log(err);
        }

    }
    const [createFeedback, setCreateFeedback] = useState({
        Rate: 5,
        Content: "",
        Created: "",
        ServiceId: null,
        RoomId: null,
        UserId: user.userId,
    })
    const fetchCreateFeedback = async (createFeedback) => {
        try {
            const formData = new FormData();
            // Thêm các trường dữ liệu khác nếu cần
            formData.append("Rate", createFeedback.Rate);
            formData.append("Content", createFeedback.Content);
            formData.append("Created", createFeedback.Created);
            formData.append("ServiceId", createFeedback.ServiceId);
            formData.append("UserId", user.userId);
            // Xử lý file ảnh nếu có

            // Nếu Images là một mảng của các file ảnh


            console.log([...formData]);
            console.log(formData);

            const response = await axios.post("https://bookingbithdayparty.azurewebsites.net/api/Room", formData, {
                headers: { "Content-Type": "multipart/form-data" },
                withCredentials: true,
            });

            console.log(response.data);
            toast.success('Create Successfully', {
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

        } catch (error) {
            console.error('Error updating service:', error);
            throw error; // Ném lỗi để xử lý ở phía gọi hàm
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);

    const onSubmit = (e) => {
        e.preventDefault();
        fetchCreateFeedback(createFeedback)
    }

    const [value, setValue] = React.useState(2);

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            onSubmit={onSubmit}
        >
            <div className='create-feedback'>
                <div className="feedback-frame-right">
                    <div className="feedback-frame-name">
                        <p>{user.fullName}</p>
                        <div className="feedback-frame-stars">
                            <Rating
                                name="simple-controlled"
                                value={value}
                                onChange={(event, newValue) => {
                                    setValue(newValue);
                                }}
                            />
                        </div>
                    </div>
                    <div className="feedback-frame-content">
                        <TextField
                            fullWidth
                            id="outlined-multiline-static"
                            label="Multiline"
                            multiline
                            rows={4}
                            defaultValue="Description"
                        // style={{margin: '0 50px'}}
                        />
                    </div>
                </div>
            </div>
        </Box>
    )
}

export default CreateFeedback1