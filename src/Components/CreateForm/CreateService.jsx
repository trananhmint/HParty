import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { styled, css } from '@mui/system';
import { Modal as BaseModal } from '@mui/base/Modal';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import '../EditForm/EditService.css'
import Item from '../Item/Item';
import { Box } from '@mui/material';
import axios from 'axios';
import { create } from '@mui/material/styles/createTransitions';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { CircularProgress } from '@mui/material';


export default function ModalCreateService() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [images, setImages] = useState("");
    const [user, setUser] = useState("");
    const [loading, setLoading] = useState(true);


    const fetchData = async () => {
        try {
            const data = await axios.get("https://bookingbirthdayparties.azurewebsites.net/api/User",
                {
                    withCredentials: true
                }
            );
            setUser(data.data.data);
            setLoading(false);
        } catch (err) {
            console.log(err);
            setLoading(false);
        }

    }
    useEffect(() => {
        fetchData();
    }, []);


    const handleChangeImage = (e) => {
        console.log(e.target.value);
        setImages(e.target.files[0])
    }




    const [createService, setCreateService] = useState({
        ServiceTitle: "",
        ServiceName: "",
        Price: 0,
        Description: "",
        UserId: user.userId,
        CategoryId: 0,
        Images: images
    })

    const handleInput = (e) => {
        const { name, value } = e.target;
        if (name === 'Price') {
            setCreateService((prev) => ({
                ...prev,
                [name]: Number(value),
            }));
        } else {
            setCreateService((prev) => ({
                ...prev,
                [name]: value,
            }));
        }

    };

    // console.log("Service Title: ", createService.ServiceTitle);
    // console.log("Service Name: ", createService.ServiceName);
    // console.log("Price: ", createService.Price);
    // console.log("Description", createService.Description);
    // console.log("User Id: ", createService.UserId);
    // console.log("Category Id: ", createService.CategoryId);
    // console.log("Images: ", createService.Images);
    console.log("Image1: ", images)
    const name = "Balloon"


    const fetchCreateService = async (createService) => {
        try {
            const formData = new FormData();
            // Thêm các trường dữ liệu khác nếu cần
            formData.append('ServiceTitle', createService.ServiceTitle);
            formData.append('ServiceName', createService.ServiceName);
            formData.append('Price', createService.Price);
            formData.append('Description', createService.Description);
            formData.append('UserId', user.userId);
            formData.append('CategoryId', createService.CategoryId);
            formData.append('Images', images);
            // Xử lý file ảnh nếu có

            // Nếu Images là một mảng của các file ảnh


            console.log([...formData]);
            console.log(formData);

            const response = await axios.post("https://bookingbirthdayparties.azurewebsites.net/api/Service", formData, {
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




            // Trả về dữ liệu từ phản hồi của API sau khi gửi yêu cầu PUT
        } catch (error) {
            console.error('Error updating service:', error);
            throw error; // Ném lỗi để xử lý ở phía gọi hàm
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();
        fetchCreateService(createService);
    }

    if (loading) {
        return (
            <div className="loading-spinner-container">
                <CircularProgress color="primary" size={60} thickness={5} />
            </div>
        );
    }


    return (
        <div className='createservice'>
            <TriggerButton type="button" onClick={handleOpen}>
                <AddCircleOutlineIcon style={{ marginTop: '-3px' }} /> CREATE
            </TriggerButton>
            <Modal
                aria-labelledby="unstyled-modal-title"
                aria-describedby="unstyled-modal-description"
                open={open}
                onClose={handleClose}
                slots={{ backdrop: StyledBackdrop }}
            >
                <ModalContent sx={{ width: '800px' }}>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                        onSubmit={onSubmit}
                    >
                        <h2 id="unstyled-modal-title" className="modal-title">
                            Create Service
                        </h2>

                        <div>
                            <div id="unstyled-modal-description" className="modal-description">
                                {/* <TextField id="outlined-basic" label="ID" variant="outlined" style={{ width: '250px', margin: '0 50px' }}/> */}
                                <TextField id="outlined-basic" label="Name" variant="outlined" style={{ width: '250px', margin: '0 50px' }} name="ServiceName" onChange={handleInput} />
                                <FormControl style={{ width: '250px', marginLeft: '50px', marginTop: '-1px' }}>
                                    <InputLabel id="demo-simple-select-helper-label">Category</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-helper-label"
                                        id="demo-simple-select-helper"
                                        defaultValue={0}
                                        name="CategoryId"
                                        label="Category"
                                        onChange={handleInput}
                                        style={{ height: '35.88px' }}
                                    >
                                        <MenuItem value={Number(0)}>
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={Number(1)}>Decorations</MenuItem>
                                        <MenuItem value={Number(2)}>Food & Drinks</MenuItem>
                                        <MenuItem value={Number(3)}>Waiters</MenuItem>
                                    </Select>
                                </FormControl>
                                <TextField id="outlined-basic" label="Price" variant="outlined" style={{ width: '250px', margin: '0 50px' }} name='Price' onChange={handleInput} />
                                {/* <TextField id="outlined-basic" label="Price" variant="outlined" style={{ width: '250px', margin: '0 50px' }} name='SalePrice' onChange={handleInput} /> */}
                                <TextField id="outlined-basic" label="Title" variant="outlined" style={{ width: '250px', margin: '0 50px' }} name='ServiceTitle' onChange={handleInput} />
                                <TextField id="outlined-basic" label="Creator" variant="outlined" style={{ width: '250px', margin: '0 50px' }} name='UserId' onChange={handleInput} defaultValue={user.userId} />
                                <TextField type='file' id="outlined-basic" variant="outlined" style={{ width: '250px', margin: '0 50px' }} onChange={handleChangeImage} />
                                {/* <FormControl style={{ width: '250px', marginLeft: '50px', marginTop: '-1px' }}>
                                    <InputLabel id="demo-simple-select-helper-label">Status</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-helper-label"
                                        id="demo-simple-select-helper"
                                        defaultValue={1}
                                        label="Status"
                                        name='Status'
                                        onChange={handleInput}
                                        style={{ height: '35.88px' }}
                                    >
                                        <MenuItem value={1}>Active</MenuItem>
                                        <MenuItem value={0}>Inactive</MenuItem>
                                    </Select>
                                </FormControl> */}
                            </div>
                            <div style={{ padding: '0 50px' }}>
                                <TextField
                                    fullWidth
                                    id="outlined-multiline-static"
                                    label="Multiline"
                                    name='Description'
                                    onChange={handleInput}
                                    multiline
                                    rows={4}
                                    defaultValue="Description"
                                // style={{margin: '0 50px'}}
                                />
                            </div>
                        </div>
                        <div style={{ margin: '20px auto' }}><Button type='submit' variant="contained" style={{ width: '200px', fontSize: '20px', fontWeight: '600' }}>Save</Button></div>
                    </Box>
                </ModalContent>
            </Modal>
        </div>
    );
}

const Backdrop = React.forwardRef((props, ref) => {
    const { open, className, ...other } = props;
    return (
        <div
            className={clsx({ 'base-Backdrop-open': open }, className)}
            ref={ref}
            {...other}
        />
    );
});

Backdrop.propTypes = {
    className: PropTypes.string.isRequired,
    open: PropTypes.bool,
};

const blue = {
    200: '#99CCFF',
    300: '#66B2FF',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    700: '#0066CC',
};

const grey = {
    50: '#F3F6F9',
    100: '#E5EAF2',
    200: '#DAE2ED',
    300: '#C7D0DD',
    400: '#B0B8C4',
    500: '#9DA8B7',
    600: '#6B7A90',
    700: '#434D5B',
    800: '#303740',
    900: '#1C2025',
};

const Modal = styled(BaseModal)`
  position: fixed;
  z-index: 1300;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledBackdrop = styled(Backdrop)`
  z-index: -1;
  position: fixed;
  inset: 0;
  background-color: rgb(0 0 0 / 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const ModalContent = styled('div')(
    ({ theme }) => css`
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 500;
    text-align: start;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 8px;
    overflow: hidden;
    background-color: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border-radius: 8px;
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0 4px 12px
      ${theme.palette.mode === 'dark' ? 'rgb(0 0 0 / 0.5)' : 'rgb(0 0 0 / 0.2)'};
    padding: 24px;
    color: ${theme.palette.mode === 'dark' ? grey[50] : grey[900]};

    & .modal-title {
      margin: 0;
      line-height: 1.5rem;
      margin-bottom: 8px;
    }

    & .modal-description {
      margin: 0;
      line-height: 1.5rem;
      font-weight: 400;
      color: ${theme.palette.mode === 'dark' ? grey[400] : grey[800]};
      margin-bottom: 4px;
    }
  `,
);

const TriggerButton = styled('button')(
    ({ theme }) => css`
    display: flex;
    float: 'right';
    alignItems: 'center';
    justify-content: center;
    gap: 8px;
    font-family:  sans-serif;
    font-size: 14px;
    line-height: 1.5;
    width: 99px;
    height: 37px;
    padding: 8px 16px;
    border-radius: 8px;
    transition: all 150ms ease;
    cursor: pointer;
    background:  white;
    border: 1px solid #f5a02c;
    // border: none;
    color:  #f5a02c;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);

    &:hover {
      background: #f5a02c;
      color: white;
    }

    &:active {
      background: #cb7d14;
    }

    &:focus-visible {
      box-shadow: 0 0 0 4px ${theme.palette.mode === 'dark' ? blue[300] : blue[200]};
      outline: none;
    }
  `,
);