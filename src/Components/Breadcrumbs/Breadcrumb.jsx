import React from 'react'
import './Breadcrumb.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Breadcrum = (props) => {
    const {service} = props;
    return (
        <div className='breadcrumb'>
            HOME <ArrowForwardIosIcon /> {service.category} <ArrowForwardIosIcon/> {service.name} 
        </div>
    )
}

export default Breadcrum;