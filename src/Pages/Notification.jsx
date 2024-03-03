import React from 'react';
import './CSS/Notification.css'
// import cakes from '../Components/Assets/Cakes.jpg';
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar/Navbar';
import NotificationContent from '../Components/NotificationContent/NotificationContent';

const Notification = () => {
  return (
    <div>
     <Navbar className="navbar"/> 
    <NotificationContent />
    <Footer className="footer"/>
  </div>
);
};

export default Notification;