import React from 'react'
import './Banner.css';
import banner_party1 from '../Assets/banner_party1.jpg'
import banner_party2 from '../Assets/banner_party2.jpg'
import banner_party3 from '../Assets/banner_party6.png'
export const Banner = () => {
  return (
    <div className='banner'>
        <div className="banner-slider-wrapper" id='slider-position'>
            <div className="banner-slider">
                <img src={banner_party1} alt="banner" id='slider-1' />
                <img src={banner_party2} alt="banner" id='slider-2'/>
                <img src={banner_party3} alt="banner" id='slider-3'/>
            </div>
            <div className="banner-slider-nav">
                <a href="#slider-1"/> 
                <a href="#slider-2"/>
                <a href="#slider-3"/>
            </div>
        </div>
    </div>
  )
}

export default Banner;
