import React from 'react'
import './Offers.css'
import models from '../Assets/models.png'
export const Offers = () => {
    return (
        <div className='offers'>
            <h1>Offers</h1>
            <hr/>
            <div className="offers-box">
                <div className="offers-left">
                    <h1>Exclusive</h1>
                    <h1>Offers For You</h1>
                    <p>ONLY ON BEST SELLERS SERVICES</p>
                    <button>Check Now</button>
                </div>
                <div className="offers-right">
                    <img src={models} alt='' />
                </div>
            </div>

        </div>
    )
}

export default Offers