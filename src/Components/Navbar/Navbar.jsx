import React, { useContext } from 'react'
import party_logo from '../Assets/logo1.png'
import SearchIcon from '@mui/icons-material/Search';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { useAuth } from '../../Context/AuthProvider';
import { ServiceContext } from '../../Context/ServiceContext';
import Cookies from "universal-cookie";
export const Navbar = () => {
    const auth = useAuth();
    const { getCountOfCart, count } = useContext(ServiceContext);
    const cookies = new Cookies();
    let token = cookies.get("authToken");

    function loginLogout(token) {
        if (token != null && token !== "" && token !== undefined) {
            return <div className='navbar-login-signup '>
                <button onClick={() => auth.logOut()} className='logout'>Log Out</button>
            </div>
        }
        else {
            return <div className='navbar-login-signup ' >
                <Link to='/signup'><button className='login'>Log In</button></Link>
                <Link to='/signup'><button className='signup'>Sign Up</button></Link>
            </div>
        }
    }

    function getAvatar(token) {
        if (token !== null && token !== "" && token !== undefined) {
            return <div className='navbar-login-profile'>
                <AccountCircleIcon />
            </div>
        }
        else {
            return null;
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
            <div className="navbar-info">
                {getAvatar(token)}
                {loginLogout(token)}
                <Link to='/cart' style={{ color: "black", textDecoration: "none" }}>
                    <div className="navbar-cart">
                        <LocalMallIcon />
                        <div className="cart-count">{getCountOfCart()}</div>
                    </div>
                </Link>

            </div>

        </div>
    )
}

export default Navbar;