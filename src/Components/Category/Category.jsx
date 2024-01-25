import React from 'react'
import './Category.css';
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import rooms from '../Assets/rooms1.png';
import foods from '../Assets/foods.jpg';
import decorations from '../Assets/decorations.jpg'
import services from '../Assets/services1.png'
export const Category = () => {
  return (
    <div className='category'>
        <ArrowLeftOutlinedIcon/>
        <ul className='category-menu'>
            <li className='category-menu-item'><img src={rooms} alt="" /> <span>Rooms</span></li>
            <li className='category-menu-item'><img src={foods} alt="" /><span>Foods</span></li>
            <li className='category-menu-item'><img src={decorations} alt="" /><span>Decorations</span></li>
            <li className='category-menu-item'><img src={services} alt="" /><span>Services</span></li>
        </ul>
        <ArrowRightOutlinedIcon/>
    </div>
  )
}

export default Category;