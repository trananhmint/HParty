import React, { useContext } from 'react'
import '../ServiceDisplay/ServiceDisplay.css';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import { ServiceContext } from '../../Context/ServiceContext';

import Rating from '@mui/material/Rating';


const ServiceDisplay = (props) => {
  const { service } = props;

  const { addToCart } = useContext(ServiceContext);

  const [value, setValue] = React.useState(2);

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
        <h1>{service.serviceName} Party room 200m2</h1>
        <div className="servicedisplay-right-star">
          {/* <StarOutlinedIcon />
          <StarOutlinedIcon />
          <StarOutlinedIcon />
          <StarOutlinedIcon />
          <StarBorderOutlinedIcon /> */}
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />

            <p>({service.sale}100)</p>
        </div>
        <div className="servicedisplay-right-prices">
          <div className="servicedisplay-right-price">{service.price}800.000 đ</div>
          <div className="servicedisplay-right-price-sale">{service.price}500.000 đ</div>
        </div>
        <div className="servicedisplay-right-description">
          <p>{service.description}
            🌿🌿🌿THẢM TRANG TRÍ PHÒNG KHÁCH PHAM STYLE🌿🌿🌿
          </p>
        </div>
        <button onClick={() => { addToCart(service.id) }}>ADD TO CART</button>

      </div>

    </div>
  )
}

export default ServiceDisplay