import React, { useContext } from 'react'
import '../ServiceDisplay/ServiceDisplay.css';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import { ServiceContext } from '../Context/ServiceContext';

const ServiceDisplay = (props) => {
  const { service } = props;
  const { addToCart } = useContext(ServiceContext);
  return (
    <div className='servicedisplay'>
      <div className="servicedisplay-left">
        <div className="servicedisplay-img-container">
          <img src={service.image} alt="" />
          <img src={service.image} alt="" />
          <img src={service.image} alt="" />
          <img src={service.image} alt="" />
        </div>
        <div className="servicedisplay-display-img">
          <img src={service.image} alt="" />
        </div>
      </div>
      <div className="servicedisplay-right">
        <h1>{service.name}</h1>
        <div className="servicedisplay-right-star">
          <StarOutlinedIcon />
          <StarOutlinedIcon />
          <StarOutlinedIcon />
          <StarOutlinedIcon />
          <StarBorderOutlinedIcon />
          <p>({service.sale})</p>
        </div>
        <div className="servicedisplay-right-prices">
          <div className="servicedisplay-right-price">{service.price} đ</div>
          <div className="servicedisplay-right-price-sale">{service.sale_price} đ</div>
        </div>
        <div className="servicedisplay-right-description">
          <p>{service.description}</p>
        </div>
        <button onClick={()=>{addToCart(service.id)}}>ADD TO CART</button>
        
      </div>

    </div>
  )
}

export default ServiceDisplay