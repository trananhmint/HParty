import React from 'react'
import './Breadcrumb.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Breadcrum = (props) => {
    const {service} = props;
    console.log(service);
    return (
        <div className='breadcrumb'>
            HOME <ArrowForwardIosIcon /> {service.categoryId}<ArrowForwardIosIcon/> {service.serviceName} 
        </div>
    )
}

export default Breadcrum;