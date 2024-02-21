import React from 'react'
import './AddressDisplay.css'
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import Chip from '@mui/material/Chip';
export const AddressDisplay = () => {
    return (
        <div className='address-display'>
            <p> <PlaceOutlinedIcon/> Address</p>
            <div className="address-display-name-phone-address">
                <div className="address-display-name-phone">
                    <p>Võ Nguyễn Trung Sơn (+84)707158436</p>
                </div>
                <div className="address-display-address">
                    <p>Tòa S2.03, Chung Cư Vinhome Grand Park, Đường Nguyễn Xiễn, Phường Long Thạnh Mỹ, Thành Phố Thủ Đức, TP. Hồ Chí Minh</p>
                    <Chip className='address-display-address-chip' 
                    label='Default' variant='outlined' 
                    style={{width:'150px', height: '30px' ,marginTop:'15px', borderRadius:'5px', border:'1px solid #dba81a', color:'#dba81a', fontSize:'15px', cursor:'pointer'}}/>
                </div>
                <div className="address-display-button">
                    <button>Change Address</button>
                </div>
            </div>
        </div>
    )
}

export default AddressDisplay