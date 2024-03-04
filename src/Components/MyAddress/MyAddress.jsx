import React from 'react'
import './MyAddress.css'
import AddIcon from '@mui/icons-material/Add';
import Chip from '@mui/material/Chip';
export const MyAddress = () => {
    return (
        <div className='my-address'>
            <div className="my-address-title-frame">
                <div className="my-address-title">
                    <h3>My Address</h3>
                    <p>Edit your address information here.</p>
                </div>
                <div className="my-address-button">
                    <button><span>Add Address</span></button>
                </div>
            </div>
            <hr />
            <div className="my-address-content">
                <h3>Address</h3>
                <div className="my-address-content-detail">
                    <div className="my-address-name-phone">
                        <h3>Võ Nguyễn Trung Sơn</h3>
                        <hr />
                        <p>(+84)707158436</p>
                    </div>
                    <div className="my-address-address">
                        <div className="my-address-address-detail">
                            <p>Tòa S2.03, Chung Cư Vinhome Grand Park, Đường Nguyễn Xiễn, Phường Long Thạnh Mỹ, Thành Phố Thủ Đức, TP. Hồ Chí Minh</p>
                            <Chip className='my-address-address-chip'
                                label='Default' variant='outlined'
                                style={{ width: '150px', height: '30px', marginTop: '15px', borderRadius: '5px', border: '1px solid #dba81a', color: '#dba81a', fontSize: '15px', cursor: 'pointer' }} />
                        </div>
                        <div className="my-address-address-button">
                            <button id="success">Update</button>
                            <button>Delete</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MyAddress;