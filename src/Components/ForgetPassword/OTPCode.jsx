import React from 'react';
import './OTPCode.css';

const OTPCode = () => {
    return (
        <div className='otpcode'>
            <div className="otpcode-box">
                <h2>Verify OTP Code</h2>
                <hr />
                <p>OTP code is sending to you. Please enter your OTP code to varify</p>
                <input type="text" placeholder='Enter your OTP' />
                <div><button type="submit">Send</button></div>
            </div>
        </div>
    )
}

export default OTPCode