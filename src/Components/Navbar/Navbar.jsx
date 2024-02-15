import React from 'react'
import party_logo from '../Assets/logo1.png'
import SearchIcon from '@mui/icons-material/Search';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { useAuth } from '../../Context/AuthProvider';
export const Navbar = () => {
    const auth = useAuth();
    const user = auth.user;

    function loginLogout(user) {
        if (user != null) {

            return <div className='navbar-login-signup'>
                <button onClick={() => auth.logOut()} className='logout'>Log Out</button>
            </div>

        }
        else {

            return <div className='navbar-login-signup'>
                <Link to='/signup'><button className='login'>Log In</button></Link>
                <Link to='/signup'><button className='signup'>Sign Up</button></Link>
            </div>

        }
    }

    // console.log(loginLogout(user));

    return (
        <div className='navbar'>
            <Link to="/" style={{ textDecoration: 'none' }}>
                <div className='navbar-logo'>
                    <img src={party_logo} alt="" />
                    <p>HParty</p>
                </div>
            </Link>

            <div className='navbar-search'>
                <input type="text" placeholder='Search here' />
                <SearchIcon />
            </div>
                {loginLogout(user)}
            <Link to='/cart' style={{ color: "black", textDecoration: "none" }}>
                <div className="navbar-cart">
                    <LocalMallIcon />
                    <div className="cart-count">0</div>
                </div>
            </Link>

        </div>
    )
}

export default Navbar;