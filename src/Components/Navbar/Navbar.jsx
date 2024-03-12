import React, { useContext, useEffect, useState } from 'react'
import party_logo from '../Assets/logo1.png'
import SearchIcon from '@mui/icons-material/Search';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../Context/AuthProvider';
import { ServiceContext } from '../../Context/ServiceContext';
import Cookies from "universal-cookie";
import axios from 'axios';
export const Navbar = () => {
    const auth = useAuth();
    const { getCountOfCart } = useContext(ServiceContext);
    const [count, setCount] = useState(0);
    const navigate = useNavigate();

    const cartId = localStorage.getItem("email");
    const cart = JSON.parse(localStorage.getItem(cartId)) || [];


    useEffect(() => {
        if (cart.length > 0) {
            setCount(getCountOfCart())
        } else if (cart === null || cart.length === 0) {
            setCount(0);
        }
    })

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
                <Link to="/customer">
                    <AccountCircleIcon />
                </Link>
            </div>
        }
        else {
            return null;
        }
    }

    // console.log(loginLogout(user));

    //Search
    const [searchTerm, setSearchTerm] = useState('');
    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const onSubmitSearch = (e) => {
        const queryParams = new URLSearchParams({ searchTerm: searchTerm }).toString();
        navigate(`/search?${queryParams}`);
    }

    return (
        <div className='navbar'>
            <Link to="/" style={{ textDecoration: 'none' }}>
                <div className='navbar-logo'>
                    <img src={party_logo} alt="" />
                    <p>HParty</p>
                </div>
            </Link>
            <form onSubmit={onSubmitSearch}>
                <div className='navbar-search'>
                    <input type="text" onChange={handleSearch} placeholder='Search here' />
                    <button><SearchIcon /></button>
                </div>
            </form>
            <div className="navbar-info">
                {getAvatar(token)}
                {loginLogout(token)}
                <Link to='/cart' style={{ color: "black", textDecoration: "none" }}>
                    <div className="navbar-cart">
                        {/* {getCountOfCart()} */}
                        <LocalMallIcon />
                        <div className="cart-count">{count}</div>
                    </div>
                </Link>

            </div>

        </div>
    )
}

export default Navbar;