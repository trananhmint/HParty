import React from 'react'
import './Breadcrumb.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';

const Breadcrum = (props) => {
    const { service } = props

    function getCategoryName(categoryId) {
        if (categoryId === 1) {
            return <Link to='/decorations' style={{ textDecoration: 'none', color: '#5e5e5e' }}><span>Decorations</span></Link>
        }
        else if (categoryId === 2) {
            return <Link to='/foods' style={{ textDecoration: 'none', color: '#5e5e5e' }}><span>Foods & Drinks</span></Link>
        }
        else if (categoryId === 3) {
            return <Link to='/waiters' style={{ textDecoration: 'none', color: '#5e5e5e' }}><span>Waiters</span></Link>
        } else {
            return <Link to='/rooms' style={{ textDecoration: 'none', color: '#5e5e5e' }}><span>Rooms</span></Link>
        }
    }
    function getName(serviceName) {
        if (serviceName) {
            return <span>{service.serviceName}</span>
        } else {
            return <span>{service.roomName}</span>
        }
    }
    return (
        <div className='breadcrumb'>
            <Link to='/' style={{ textDecoration: 'none', color: '#5e5e5e' }}>HOME</Link> <ArrowForwardIosIcon /> {getCategoryName(service.categoryId)}<ArrowForwardIosIcon /> {getName(service.serviceName)}
        </div>
    )
}

export default Breadcrum;