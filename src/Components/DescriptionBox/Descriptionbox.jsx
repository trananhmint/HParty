import React from 'react'
import './DescriptionBox.css'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Descriptionbox = (props) => {
  const {service} = props;
  return (
    <div className="descriptionbox">
      <div className='descriptionbox-description'>
        <h2>Service Details</h2>
        <hr />
        <p>
          {service.description}
        </p>

      </div>
      {/* <hr /> */}
      <div className="descriptionbox-facilities">
        <h2>Facilities</h2>
        <hr />
        <div className="facilities">
          <p><CheckCircleIcon/> Wifi free</p>
          <p><CheckCircleIcon/> Non-smoking rooms</p>
          <p><CheckCircleIcon/> Bar</p>
          <p><CheckCircleIcon/> Airport shuttle</p>
          <p><CheckCircleIcon/> Beach front</p>
        </div>
      </div>
    </div>

  )
}

export default Descriptionbox