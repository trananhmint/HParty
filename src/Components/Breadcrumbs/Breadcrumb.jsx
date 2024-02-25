import React from 'react'
import './Breadcrumb.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Breadcrum = (props) => {
    const {service} = props;
    console.log(service);
    // console.log(service.categoryId);
    console.log(service.serviceName);

    function getCategoryName (categoryId) {
        if (categoryId === 1) {
            return <span>Foods</span>
        } 
        else if (categoryId === 2){
            return <span>Decorations</span>
        }
        else if (categoryId === 3){
            return <span>Waiters</span>
        }else{
            return <span>Rooms</span>
        }
    }

    function getName (serviceName) {
        if(serviceName){
            return <span>{service.serviceName}</span>
        }else{
            return <span>{service.roomName}</span>
        }
    }
    return (
        <div className='breadcrumb'>
            HOME <ArrowForwardIosIcon /> {getCategoryName(service.categoryId)}<ArrowForwardIosIcon/> {getName(service.serviceName)} 
        </div>
    )
}

export default Breadcrum;