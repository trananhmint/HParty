import React from 'react'
import './Category.css';
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import rooms from '../Assets/rooms1.png';
import foods from '../Assets/foods.jpg';
import decorations from '../Assets/decorations.jpg'
import services from '../Assets/services1.png'
import { Link } from 'react-router-dom';
export const Category = () => {
  return (
    <div className='category'>
      <ArrowLeftOutlinedIcon />
      <ul className='category-menu'>
        <Link to='/rooms' style={{textDecoration:'none'}}>
          <li className='category-menu-item'><img src={rooms} alt="" /> <span>Rooms</span></li>
        </Link>
        <Link to='/foods' style={{textDecoration:'none'}}>
          <li className='category-menu-item'><img src={foods} alt="" /><span>Foods</span></li>
        </Link>
        <Link to='/decorations' style={{textDecoration:'none'}}>
          <li className='category-menu-item'><img src={decorations} alt="" /><span>Decors</span></li>
        </Link>
        <Link to='/services' style={{textDecoration:'none'}}>
          <li className='category-menu-item'><img src={services} alt="" /><span>Services</span></li>
        </Link>

      </ul>
      <ArrowRightOutlinedIcon className='arrow-right' />
    </div>

  )
}

export default Category;