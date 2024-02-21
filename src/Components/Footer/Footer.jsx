import React from 'react'
import './Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import party_logo from '../Assets/logo1.png'
export const Footer = () => {
    const topScroll = () => window.scrollTo({top: 0, behavior: "smooth"});

    return (
        <div className='footer'>
            <div onClick={topScroll} className="footer-logo">
                <img src={party_logo} alt='' />
                <p>HParty</p>
            </div>
            <ul className="footer-links">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About Us</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social-icon">
                <div className="footer-icons-container">
                   <InstagramIcon/>
                </div>
                <div className="footer-icons-container">
                   <FacebookIcon/>
                </div>
                <div className="footer-icons-container">
                   <XIcon/>
                </div>
            </div>
            <div className="footer-copyright">
                <hr/>
                <p>Copyright @ 2024 - All Right </p>
            </div>
        </div>
    )
}

export default Footer;