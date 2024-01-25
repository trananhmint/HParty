import React from 'react'
import party_logo from '../Assets/logo1.png'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import './Navbar.css';
import { Link } from 'react-router-dom';
export const Navbar = () => {
    return (
        <div className='navbar'>
            <Link to="/" style={{textDecoration:'none'}}>
                <div className='navbar-logo'>
                    <img src={party_logo} alt="" />
                    <p>HParty</p>
                </div>
            </Link>

            <div className='navbar-search'>
                <input type="text" placeholder='Search here'/>
                <SearchIcon />
            </div>

            <div className="navbar-login-signup">
                <Link to='/signup'><button className='login'>Sign Up</button></Link>
                <button className='signup'>Log In</button>
            </div>
            <div className="navbar-cart">
                <ShoppingCartOutlinedIcon />
                <div className="cart-count">0</div>
            </div>
        </div>
    )
}

export default Navbar;