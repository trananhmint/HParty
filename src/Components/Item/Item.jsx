import React from 'react'
import './Item.css'
import StarRateIcon from '@mui/icons-material/StarRate';
import StarRateOutlinedIcon from '@mui/icons-material/StarRateOutlined';
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';

export const Item = (props) => {



    const [value, setValue] = React.useState(2);

    return (
        <Link to={`/service/${props.id}`} style={{textDecoration:'none', color:'black'}}> 
        <div className='item-card'>
            <div className="item-card-img">
                <img src={props.image} alt="" />
            </div>
            <hr id='item-card-hr' />
            <div className="item-card-descriptions">
                <div className="item-card-name">
                    {props.serviceName}
                </div>
                <div className="item-card-prices">
                    <div className='item-card-new-price'>{props.price}đ</div>
                    <div className='item-card-old-price'>{props.sale_Price}đ</div>
                </div>
                <div className="rate-stars">
                    <div className="stars">
                    <Rating name="read-only" value={value} readOnly />
                    </div>
                    <p>(122)</p>
                    {/* <p>{props.sale}</p> */}
                </div>
                <div className="item-card-place">
                    {/* {props.description} */}
                </div>
            </div>
        </div>
        </Link>
    )
}

export default Item;