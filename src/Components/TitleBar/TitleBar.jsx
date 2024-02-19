import React from 'react'
import './TitleBar.css'
import { Link } from 'react-router-dom';
import party_logo from '../Assets/logo1.png'
export const TitleBar = (props) => {
    const { title } = props;
    function getTitle(title) {
        if (title === 'payment') {
            return <h2>Payment</h2>
        } if (title === 'cart') {
            return <h2>Cart</h2>
        }if(title === 'contract'){
            return <h2>Contract</h2>
        }
    }
    return (
        <div className='titlebar'>
            <Link to="/" style={{ textDecoration: 'none' }}>
                <div className='titlebar-logo'>
                    <img src={party_logo} alt="" />
                    <p>HParty</p>
                </div>
            </Link>
            <hr />
            <div className="titlebar-title">
                {getTitle(title)}
            </div>
        </div>
    )
}

export default TitleBar;
