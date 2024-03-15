import React from 'react'
import '../Item/Item.css'
import StarRateIcon from '@mui/icons-material/StarRate';
import StarRateOutlinedIcon from '@mui/icons-material/StarRateOutlined';
import { Link } from 'react-router-dom';

export const RoomItems = (props) => {

    function getSalePrice(sale_Price) {
        if (sale_Price !== undefined && sale_Price !== null && sale_Price !== 0) {
            return <div className='item-card-old-price'>{props.salePrice}đ</div>
        } else {
            return null;
        }
    }

    {
        if (props.images !== null && props.images !== undefined) {
            return (
                <Link to={`/roomService/${props.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                    <div className='item-card'>
                        <div className="item-card-img">
                            <img src={`data:image/jpeg;base64,${props.images[0].imageBase64}`} alt="Images" />
                        </div>
                        <hr id='item-card-hr' />
                        <div className="item-card-descriptions">
                            <div className="item-card-name">
                                {props.roomName}
                            </div>
                            <div className="item-card-prices">
                                <div className='item-card-new-price'>{props.price}đ</div>
                                {getSalePrice(props.salePrice)}
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
                                {/* <p>{props.sale}</p> */}
                            </div>
                            <div className="item-card-place">
                                {/* {props.description} */}
                            </div>
                        </div>
                    </div>
                </Link>
            )
        } else {
            return (
                <Link to={`/roomService/${props.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                    <div className='item-card'>
                        <div className="item-card-img">
                            <img src={`data:image/jpeg;base64,${undefined}`} alt="Images" />
                        </div>
                        <hr id='item-card-hr' />
                        <div className="item-card-descriptions">
                            <div className="item-card-name">
                                {props.roomName}
                            </div>
                            <div className="item-card-prices">
                                <div className='item-card-new-price'>{props.price}đ</div>
                                {getSalePrice(props.salePrice)}
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
    }


}

export default RoomItems;