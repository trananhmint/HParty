import React, { useContext } from 'react'
import '../ServiceDisplay/ServiceDisplay.css';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import { ServiceContext } from '../../Context/ServiceContext';

import Rating from '@mui/material/Rating';


const ServiceDisplay = (props) => {
  const { service } = props;

  const { AddToCart, AddRoomsToCart} = useContext(ServiceContext);

  const [value, setValue] = React.useState(2);

  function getName(serviceName) {
    if (serviceName) {
      return <h1>{service.serviceName}</h1>
    } else {
      return <h1>{service.roomName}</h1>
    }
  }

  function getButton (serviceName) {
    if (serviceName) {
      return <button onClick={() => { AddToCart(service.serviceId) }}>ADD TO CART</button>
    } else {
      return <button onClick={() => { AddRoomsToCart(service.roomId) }}>ADD TO CART</button>
    }
  }

  return (
    <div className='servicedisplay'>
      <div className="servicedisplay-left">
        <div className="servicedisplay-img-container">
          <img src={service.imgPath} alt="" />
          <img src={service.imgPath} alt="" />
          <img src={service.imgPath} alt="" />
          <img src={service.imgPath} alt="" />
        </div>
        <div className="servicedisplay-display-img">
          <img src={service.image} alt="" />
        </div>
      </div>
      <div className="servicedisplay-right">
        {getName(service.serviceName)}
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
          <div className="servicedisplay-right-price">{service.price}đ</div>
          <div className="servicedisplay-right-price-sale">{service.sale_Price}đ</div>
        </div>
        <div className="servicedisplay-right-description">
          <p>{service.description}
          </p>
        </div>
        {/* <button onClick={() => { AddToCart(service.serviceId) }}>ADD TO CART</button> */}
            {getButton(service.serviceName)}
      </div>

    </div>
  )
}

export default ServiceDisplay