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

import './EditService.css'

export default function ModalCreateService() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const name = "Balloon"
    const [status, setStatus] = React.useState('');

    const handleChangeStatus = (event) => {
        setStatus(event.target.value);
    };
    const [category, setCategory] = React.useState('');

    const handleChangeCategory = (event) => {
        setCategory(event.target.value);
    };

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
                    <h2 id="unstyled-modal-title" className="modal-title">
                        Create Service
                    </h2>

                    <div>
                        <div id="unstyled-modal-description" className="modal-description">
                            <TextField id="outlined-basic" label="ID" variant="outlined" style={{ width: '250px', margin: '0 50px' }} />
                            <TextField id="outlined-basic" label="Name" variant="outlined" style={{ width: '250px', margin: '0 50px' }} />
                            <FormControl style={{ width: '250px', marginLeft: '50px', marginTop: '-1px' }}>
                                <InputLabel id="demo-simple-select-helper-label">Category</InputLabel>
                                <Select
                                    labelId="demo-simple-select-helper-label"
                                    id="demo-simple-select-helper"
                                    value={category}
                                    label="Category"
                                    onChange={handleChangeCategory}
                                    style={{ height: '35.88px' }}
                                >
                                    <MenuItem value={10}>Room</MenuItem>
                                    <MenuItem value={20}>Food</MenuItem>
                                    <MenuItem value={20}>Decoration</MenuItem>
                                    <MenuItem value={20}>Waiter</MenuItem>

                                </Select>
                            </FormControl>
                            <TextField id="outlined-basic" label="Price" variant="outlined" style={{ width: '250px', margin: '0 50px' }} />
                            <TextField id="outlined-basic" label="Price" variant="outlined" style={{ width: '250px', margin: '0 50px' }} />
                            <TextField id="outlined-basic" label="Title" variant="outlined" style={{ width: '250px', margin: '0 50px' }} />
                            <TextField id="outlined-basic" label="Creator" variant="outlined" style={{ width: '250px', margin: '0 50px' }} />
                            <TextField id="outlined-basic" label="Price" variant="outlined" style={{ width: '250px', margin: '0 50px' }} />
                            <FormControl style={{ width: '250px', marginLeft: '50px', marginTop: '-1px' }}>
                                <InputLabel id="demo-simple-select-helper-label">Status</InputLabel>
                                <Select
                                    labelId="demo-simple-select-helper-label"
                                    id="demo-simple-select-helper"
                                    value={status}
                                    label="Status"
                                    onChange={handleChangeStatus}
                                    style={{ height: '35.88px' }}
                                >
                                    <MenuItem value={10}>Active</MenuItem>
                                    <MenuItem value={20}>Inactive</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div style={{ padding: '0 50px' }}>
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
                    <div style={{ margin: '20px auto' }}><Button variant="contained" style={{ width: '200px', fontSize: '20px', fontWeight: '600' }}>Save</Button></div>

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