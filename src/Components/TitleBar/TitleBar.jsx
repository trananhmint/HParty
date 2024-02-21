import React from 'react'
import './TitleBar.css'
import { Link } from 'react-router-dom';
import party_logo from '../Assets/logo1.png'
export const TitleBar = (props) => {
    const { title } = props;
    function getTitle(title) {
        if (title === 'payment') {
            return <p>Payment</p>
        } if (title === 'cart') {
            return <p>Cart</p>
        }if(title === 'contract'){
            return <p>Contract</p>
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
