import React from 'react'
import './Booked.css'

const All = () => {
  return (
    <div className='all'>
              <div className="booked">
        <div className="booked-info">
          <p>ID: 124362657</p>
          <div className="booked-status">
            <p>Done</p>
            <hr />
            <p>12:00</p>
          </div>

        </div>
        <hr />
        <div className="booked-items-container">
          <div className="booked-item">
            <div className="booked-item-details">
              <div className="booked-item-img">
                <img src="" alt="" />
              </div>
              <div className="booked-item-info">
                <p className='booked-name'>Service's name sdhsahdkas</p>
                <p>Type: iyygig</p>
                <p>x2</p>
              </div>
            </div>
            <div className="booked-item-price">
              <p>200.000đ</p>
            </div>
          </div>
        </div>
        <hr />
        <div className="booked-items-container">
          <div className="booked-item">
            <div className="booked-item-details">
              <div className="booked-item-img">
                <img src="" alt="" />
              </div>
              <div className="booked-item-info">
                <p className='booked-name'>Service's name sdhsahdkas</p>
                <p>Type: iyygig</p>
                <p>x2</p>
              </div>
            </div>
            <div className="booked-item-price">
              <p>200.000đ</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default All