import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { styled, css } from '@mui/system';
import { Modal as BaseModal } from '@mui/base/Modal';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Input } from '@mui/base/Input';
import TextField from '@mui/material/TextField';
import { Edit } from '@mui/icons-material';
import './EditService.css'

export default function ModalUnstyled() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const name = "Balloon"
    const [status, setStatus] = React.useState('');

    const handleChange = (event) => {
        setStatus(event.target.value);
    };

    return (
        <div className='editservice'>
            <TriggerButton type="button" onClick={handleOpen}>
                <Edit style={{marginTop: '-3px'}}/>  EDIT
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
                        Update Service
                    </h2>

                    <div>
                        <div id="unstyled-modal-description" className="modal-description">

                            {/* <div className="update-container"> */}
                            <div className="update-description update-name">
                                {/* <p>Name: </p> */}
                                <TextField id="outlined-basic" label="Name" variant="outlined" />
                            </div>
                            <div className="update-description update-category">
                                {/* <p>Category: </p> */}
                                <TextField id="outlined-basic" label="Category" variant="outlined" />
                            </div>
                            {/* </div> */}
                            {/* <div className="update-container"> */}
                            <div className="update-description update-price">
                                <p>Price: </p>
                                <input type="number" />
                            </div>
                            <div className="update-description update-price-sale">
                                <p>Sale price: </p>
                                <input type="number" />
                            </div>
                            {/* </div> */}
                            {/* <div className="update-container"> */}
                            <div className="update-description update-title">
                                <p>Title: </p>
                                <input type="text" />
                            </div>
                            <div className="update-description update-creator">
                                <p>Creator: </p>
                                <input type="text" />
                            </div>
                            {/* </div> */}
                            {/* <div className="update-container"> */}
                            <div className="update-description update-creator">
                                <p>Name: </p>
                                <input type="text" />
                            </div>
                            <div className="update-description update-status">
                                <p>Status: </p>
                                <Select
                                    style={{ height: '40px', width: '250px' }}
                                    labelId="demo-simple-select-autowidth-label"
                                    id="demo-simple-select-autowidth"
                                    value={status}
                                    onChange={handleChange}
                                    autoWidth
                                    label="Status"
                                >
                                    {/* <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem> */}
                                    <MenuItem value={10}>Active</MenuItem>
                                    <MenuItem value={21}>Out of stock</MenuItem>
                                    <MenuItem value={22}>Inactive</MenuItem>
                                </Select>
                            </div>
                            {/* </div> */}
                            {/* <div className="update-container"> */}

                            {/* </div> */}
                        </div>
                        <div className="update-creator">
                            <p>Description: </p>
                            <textarea name="" id="" cols="30" rows="10"></textarea>
                        </div>
                    </div>
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