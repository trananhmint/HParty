import React from 'react'
import './EmailAccount.css'

const EmailAccount = () => {
    return (
        <div className='emailaccount'>
            <div className='emailaccount-box'>
                <h2 className='emailaccount-title'>Finding Your Account</h2>
                <hr />
                <p>Please enter email to find your account and send OTP code</p>
                <input type="email" placeholder='Enter your email' />
                <div><button type='submit'>Find</button></div>
            </div>
        </div>
    )
}

export default EmailAccount