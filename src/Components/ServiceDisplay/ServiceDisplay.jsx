import React, { useContext, useState } from 'react'
import '../ServiceDisplay/ServiceDisplay.css';
import { ServiceContext } from '../../Context/ServiceContext';

import Rating from '@mui/material/Rating';


const ServiceDisplay = (props) => {
  const [base64, setBase64] = useState('')
  const { service } = props;
  const { AddToCart, VND } = useContext(ServiceContext);
  const [value, setValue] = React.useState(service.averageRating);


  const images = service.images


  const handleClick = (service) => {
    if (service.serviceName) {
      AddToCart(service.serviceId)
    } else {
      AddToCart(service.roomId)
    }

  }


  function getName(serviceName) {
    if (serviceName) {
      return <h1>{service.serviceName}</h1>
    } else {
      return <h1>{service.roomName}</h1>
    }
  }

  function getSalePrice(sale_Price) {
    if (sale_Price !== undefined && sale_Price !== null && sale_Price !== 0) {
      return <div className="servicedisplay-right-price-sale">{service.sale_Price}đ</div>
    } else {
      return null;
    }
  }

  {
    if (service.images !== null && service.images !== undefined && service.images !== "" && service !== undefined) {
      return (
        <div className='servicedisplay'>
          <div className="servicedisplay-left">
            <div className="servicedisplay-img-container">
              <img src={`data:image/jpeg;base64,${images[0].imageBase64}`} alt="Images" />
              <img src={`data:image/jpeg;base64,${images[0].imageBase64}`} alt="Images" />
              <img src={`data:image/jpeg;base64,${images[0].imageBase64}`} alt="Images" />
              <img src={`data:image/jpeg;base64,${images[0].imageBase64}`} alt="Images" />
            </div>
            <div className="servicedisplay-display-img">
              <img src={`data:image/jpeg;base64,${images[0].imageBase64}`} alt="Images" />
            </div>
          </div>
          <div className="servicedisplay-right">
            {getName(service.serviceName)}
            <div className="servicedisplay-right-star">
              <Rating name="read-only" value={value} readOnly />
            </div>
            <div className="servicedisplay-right-prices">
              <div className="servicedisplay-right-price">{VND.format(service.price)}</div>
              {/* <div className="servicedisplay-right-price-sale">{service.sale_Price}đ</div> */}
              {getSalePrice(service.salePrice)}
            </div>
            <div className="servicedisplay-right-description">
            </div>
            <button onClick={() => { handleClick(service) }}>ADD TO CART</button>
            {/* {getButton(service.serviceName)} */}
          </div>

        </div>
      )
    } else {
      return (
        <div className='servicedisplay'>
          <div className="servicedisplay-left">
            <div className="servicedisplay-img-container">
              <img src={`data:image/jpeg;base64,${base64}`} alt="Images" />
              <img src={`data:image/jpeg;base64,${base64}`} alt="Images" />
              <img src={`data:image/jpeg;base64,${base64}`} alt="Images" />
              <img src={`data:image/jpeg;base64,${base64}`} alt="Images" />
            </div>
            <div className="servicedisplay-display-img">
              <img src={`data:image/jpeg;base64,${base64}`} alt="Images" />
            </div>
          </div>
          <div className="servicedisplay-right">
            {getName(service.serviceName)}
            <div className="servicedisplay-right-star">
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />

            </div>
            <div className="servicedisplay-right-prices">
              <div className="servicedisplay-right-price">{VND.format(service.price)}</div>
              {getSalePrice(service.salePrice)}
            </div>
            <div className="servicedisplay-right-description">
              <p>{service.description}
              </p>
            </div>
            <button onClick={() => { handleClick(service) }}>ADD TO CART</button>

          </div>

        </div>
      )
    }
  }

}

export default ServiceDisplay
