import React from 'react'
import GoogleIcon from '@mui/icons-material/Google';

const Login = () => {
  return (
    <div className='cointainer'>
        <div className="form-container sign-up">
            <form action="">
                <h1>Create Account</h1>
                <div className="social-icon">
                    <a href='#' className='icon'><GoogleIcon/></a>
                    <a href='#' className='icon'><GoogleIcon/></a>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login