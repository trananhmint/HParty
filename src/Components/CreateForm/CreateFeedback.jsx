import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { styled, css } from '@mui/system';
import { Modal as BaseModal } from '@mui/base/Modal';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import { NumericFormat } from 'react-number-format';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import '../EditForm/EditService.css'
import MoneyFormattedInputs from '../Format/NumericFormat';
import { useState } from 'react';
import { Box } from '@mui/material';
import axios from 'axios';
import { toast } from 'react-toastify';
import Rating from '@mui/material/Rating';
import { useEffect } from 'react';

export default function ModalCreateFeedback({ service }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [images, setImages] = useState("");
    const [price, setPrice] = useState(0);
    const [host, setHost] = useState("");


    const [createFeedback, setCreateFeedback] = useState({
        rate: 0,
        content: "",
        serviceId: service.serviceId === undefined ? 0 : service.serviceId,
        roomId: service.roomId === undefined ? 0 : service.roomId,
        userId: "", // Initially empty
    });


    const fetchData = async () => {
        try {
            const data = await axios.get("https://bookingbithdayparty.azurewebsites.net/api/User", {
                withCredentials: true
            });
            setHost(data.data.data);
        } catch (err) {
            console.log(err);
            // Handle error
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        if (host && host.userId) {
            setCreateFeedback(prevState => ({
                ...prevState,
                userId: host.userId
            }));
        }
    }, [host]);

    const handleInput = (e) => {
        const { name, value } = e.target;
        setCreateFeedback(prevState => ({
            ...prevState,
            [name]: name === "rate" ? Number(value) : value,
        }));
    };

    const fetchCreateFeedback = async () => {
        try {
            const response = await axios.post("https://bookingbithdayparty.azurewebsites.net/api/Feedback/Create", createFeedback, {
                headers: { "Content-Type": "application/json" },
                withCredentials: true,
            });

            console.log(response.data);
            if (response.data.isSuccess === true) {
                toast.success('Create Successfully', {
                    // Toast options
                });
                window.location.reload();
            }


        } catch (error) {
            console.error('Error updating service:', error);
            // Handle error
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();
        fetchCreateFeedback();
    };

    console.log(createFeedback.rate);


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
                            Feedback
                        </h2>
                        <hr />
                        <div>
                            <div id="unstyled-modal-description" className="modal-description">
                                <p style={{ width: '100px', margin: '30px 0px 10px 50px' }}>Rating: </p>
                                <Rating
                                    name="rate"

                                    onChange={handleInput}
                                    style={{ width: '100px', margin: '30px 70px 10px 0px' }}
                                />
                                {/* <TextField type='file' id="outlined-basic" variant="outlined" style={{ width: '250px', margin: '10px 50px' }} name='Images' onChange={handleChangeImage} /> */}
                            </div>
                            <div style={{ padding: '0 42px' }}>
                                <TextField fullWidth id="outlined-multiline-static"
                                    label="Description"
                                    multiline rows={4}
                                    placeholder='Write your feedback here'
                                    name='content'
                                    onChange={handleInput}
                                    style={{ width: "100%" }}
                                />
                            </div>
                        </div>
                        <div style={{ margin: '20px auto' }}><Button type='submit' variant="contained" style={{ width: '200px', fontSize: '20px', fontWeight: '600', marginRight: '34px' }}>Save</Button></div>
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