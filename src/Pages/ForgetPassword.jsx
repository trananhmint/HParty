import React from 'react'
import EmailAccount from '../Components/ForgetPassword/EmailAccount'
import OTPCode from '../Components/ForgetPassword/OTPCode'


const ForgetPassword = () => {
  return (
    <div className='forgetpassword'>
      {/* <EmailAccount/> */}
      <OTPCode/>
    </div>
  )
}

export default ForgetPassword