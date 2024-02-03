import React from 'react'
import './Item.css'
import StarRateIcon from '@mui/icons-material/StarRate';
import StarRateOutlinedIcon from '@mui/icons-material/StarRateOutlined';
import { Link } from 'react-router-dom';

export const Item = (props) => {
    return (
        <div className='item-card'>
            <div className="item-card-img">
                <Link to={`/service/${props.id}`}><img src={props.image} alt="" /></Link>
            </div>
            <hr id='item-card-hr' />
            <div className="item-card-descriptions">
                <div className="item-card-name">
                    {props.name}
                </div>
                <div className="item-card-prices">
                    <div className='item-card-new-price'>{props.new_price}.000đ</div>
                    <div className='item-card-old-price'>{props.old_price}.000đ</div>
                </div>
                <div className="rate-stars">
                    <div className="stars">
                        <StarRateIcon />
                        <StarRateIcon />
                        <StarRateIcon />
                        <StarRateIcon />
                        <StarRateOutlinedIcon />
                    </div>
                    <p>(122)</p>
                </div>
                <div className="item-card-place">
                    {props.place}
                </div>
            </div>
        </div>
    )
}

export default Item;