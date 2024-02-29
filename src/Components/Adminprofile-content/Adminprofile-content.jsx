import React, { useState } from 'react';
import './Adminprofile-content.css'; // Import file CSS
import party_logo from '../Assets/logo1.png';

const AdminProfileContent = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
    <div className="admin-profile-container">
      <div className="admin-profile-info">
        <h1 className="admin-profile-header">Admin Profile</h1>
        <div className="admin-profile-content-wrapper">
          <p className="admin-profile-content">Name: <span style={{fontWeight: '500'}}>Vo Nguyen Trung Hai</span></p>
          <p className="admin-profile-content">Role: <span style={{fontWeight: '500'}}>Admin</span></p>
          <p className="admin-profile-content">Address: <span style={{fontWeight: '500'}}>Thanh pho Ho Chi Minh</span></p>
          <p className="admin-profile-content">Contact: <span style={{fontWeight: '500'}}>0839839437</span></p>
          <p className="admin-profile-content">Hometown: <span style={{fontWeight: '500'}}>Tien Giang Province</span></p>
          <p className="admin-profile-content">
            Account: <span style={{fontWeight: '500'}}>chunhai_2703</span>
          </p>
          <p className="admin-profile-content">
            Password: <span style={{fontWeight: '500'}}>{showPassword ? '27032003' : ' ••••••••••'}</span>
            <button className="admin-profile-button" onClick={togglePasswordVisibility}>
              {showPassword ? 'Hide Password' : 'Show Password'}
            </button>
          </p>
        </div>
        <div className="admin-profile-buttons">
          <button className="admin-profile-button">Log out</button>
          <button className="admin-profile-button">Payment</button>
          <button className="admin-profile-button">Booked Service</button>
          <button className="admin-profile-button">Change Password</button>
        </div>
      </div>
    </div>
    <div className="admin-profile-container">
    <div className="admin-profile-avatar">
        <img src={party_logo} alt="" className="admin-avatar-image" />
      </div>
    </div>
   
    </div>
  );
};

export default AdminProfileContent;
