import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { styled, css } from '@mui/system';
import { Modal as BaseModal } from '@mui/base/Modal';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { Edit } from '@mui/icons-material';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';

import './EditService.css'
import Item from '../Item/Item';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function ModalUpdateService({ service }) {
    const [open, setOpen] = React.useState(false);

    const [images, setImages] = useState("");

    const handleChangeImage = (e) => {
        console.log(e.target.value);
        setImages(e.target.files[0])
    }

    const handleOpen = () => {
        setOpen(true)
    };
    const handleClose = (e) => {
        e.preventDefault();
        setOpen(false)
    };


    const [updateService, setUpdateService] = useState({
        ServiceId: service.serviceId,
        ServiceTitle: service.serviceTitle,
        ServiceName: service.serviceName,
        Price: service.price,
        Description: service.description,
        UserId: service.user.userId,
        CategoryId: service.categoryId,
        Images: service.images
    })

    const handleInput = (e) => {
        const { name, value } = e.target;
        if (name === 'Price') {
            setUpdateService((prev) => ({
                ...prev,
                [name]: Number(value),
            }));
        } else {
            setUpdateService((prev) => ({
                ...prev,
                [name]: value,
            }));
        }

    };

    // console.log("Service Name: ", updateService.ServiceName)

    const name = "Balloon"



    const fetchUpdateService = async (updateService) => {
        try {
            const formData = new FormData();
            // // Thêm các trường dữ liệu khác nếu cần
            formData.append('ServiceId', updateService.ServiceId);
            formData.append('ServiceTitle', updateService.ServiceTitle);
            formData.append('ServiceName', updateService.ServiceName);
            formData.append('Price', updateService.Price);
            formData.append('Description', updateService.Description);
            formData.append('UserId', updateService.UserId);
            formData.append('CategoryId', updateService.CategoryId);
            formData.append('Images', updateService.Images);
            console.log([...formData]);
            console.log(formData);

            const response = await axios.put(`https://bookingbithdayparty.azurewebsites.net/api/Service/service/${service.serviceId}`, formData,

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
        e.preventDefault(); // Ngăn chặn sự kiện mặc định của form
        fetchUpdateService(updateService);


    }




    return (
        <div className='editservice'>
            <TriggerButton type="button" onClick={handleOpen}>
                <Edit style={{ marginTop: '-3px' }} />  EDIT
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
                            Update Service
                        </h2>

                        <div>
                            <div id="unstyled-modal-description" className="modal-description">


                                <TextField id="outlined-basic" label="Name" variant="outlined" style={{ width: '250px', margin: '0 50px' }} name='ServiceName' defaultValue={service.serviceName} onChange={handleInput} />
                                <FormControl style={{ width: '250px', marginLeft: '50px', marginTop: '-1px' }}>
                                    <InputLabel id="demo-simple-select-helper-label">Category</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-helper-label"
                                        id="demo-simple-select-helper"
                                        defaultValue={service.categoryId}
                                        label="Category"
                                        name='CategoryId'
                                        onChange={handleInput}
                                        // onChange={handleChangeCategory}
                                        style={{ height: '35.88px' }}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={Number(1)}>Decorations</MenuItem>
                                        <MenuItem value={Number(2)}>Food & Drinks</MenuItem>
                                        <MenuItem value={Number(3)}>Waiters</MenuItem>
                                    </Select>
                                </FormControl>
                                <TextField type='number' id="outlined-basic" label="Price" variant="outlined" style={{ width: '250px', margin: '0 50px' }} name='Price' defaultValue={service.price} onChange={handleInput} />
                                <TextField id="outlined-basic" label="Price" variant="outlined" style={{ width: '250px', margin: '0 50px' }} name='sale_Price' />
                                <TextField id="outlined-basic" label="Images" variant="outlined" style={{ width: '250px', margin: '0 50px' }} name='Images' defaultValue={service.images} onChange={handleInput} />
                                <TextField id="outlined-basic" label="Title" variant="outlined" style={{ width: '250px', margin: '0 50px' }} name='ServiceTitle' defaultValue={service.serviceTitle} onChange={handleInput} />
                                <TextField id="outlined-basic" label="Creator" variant="outlined" style={{ width: '250px', margin: '0 50px' }} name='UserId' defaultValue={service.user.userId} onChange={handleInput} />
                                {/* <FormControl style={{ width: '250px', marginLeft: '50px', marginTop: '-1px' }}>
                                    <InputLabel id="demo-simple-select-helper-label">Status</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-helper-label"
                                        id="demo-simple-select-helper"
                                        defaultValue={service.status}
                                        // value={status}
                                        name="status"
                                        label="Status"
                                        onChange={handleInput}
                                        // onChange={handleChangeStatus}
                                        style={{ height: '35.88px' }}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
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
                                    multiline
                                    rows={4}
                                    defaultValue={service.description}
                                    name='Description'
                                    onChange={handleInput}
                                // value={description}
                                // style={{margin: '0 50px'}}
                                />

                            </div>
                        </div>
                        <div style={{ margin: '20px auto' }}><Button type='submit' variant="contained" style={{ width: '200px', fontSize: '20px', fontWeight: '600' }}>Save</Button></div>
                    </Box>
                </ModalContent>
            </Modal>
        </div >
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
    alignItems: 'center';
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
    background: #f5a02c;
    border: 1px solid #f5a02c;
    // border: none;
    color:  white;
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