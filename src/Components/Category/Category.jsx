import React from 'react'
import './Category.css';
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import rooms from '../Assets/room.png';
import foods from '../Assets/food.png';
import decorations from '../Assets/decoration.png'
import waiters from '../Assets/waiter.png'
import { Link } from 'react-router-dom';
export const Category = () => {
  return (
    <div className='category'>
      <ArrowLeftOutlinedIcon />
      <ul className='category-menu'>
        <Link to='/rooms' style={{textDecoration:'none'}}>
          <li className='category-menu-item'><img src={rooms} alt="" /> <span>Rooms</span></li>
        </Link>
        <Link to='/decorations' style={{textDecoration:'none'}}>
          <li className='category-menu-item'><img src={decorations} alt="" /><span>Decors</span></li>
        </Link>
        <Link to='/foods' style={{textDecoration:'none'}}>
          <li className='category-menu-item'><img src={foods} alt="" /><span>Foods</span></li>
        </Link>
        <Link to='/waiters' style={{textDecoration:'none'}}>
          <li className='category-menu-item'><img src={waiters} alt="" /><span>Waiters</span></li>
        </Link>

      </ul>
      <ArrowRightOutlinedIcon className='arrow-right' />
    </div>

  )
}

export default Category;