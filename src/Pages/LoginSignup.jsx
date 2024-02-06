import React, { useRef, useState } from 'react'
import './CSS/LoginSignup.css'
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const LoginSignup = () => {
  const ref = useRef(null);
  const [isActive, setIsActive] = useState(true);

  return (
    <div className='Loginsignup'>

      <div ref={ref} id='container' className={isActive ? 'container active' : 'container'}>
        <div className="form-container sign-up">
          <form>
            <h1>Create Account</h1>
            <div className="social-icons">
              <a href="https://github.com/trananhmint/HParty"><GoogleIcon /></a>
              <a href="https://github.com/trananhmint/HParty"><FacebookIcon /></a>
              <a href="https://github.com/trananhmint/HParty"><GitHubIcon /></a>
              <a href="https://github.com/trananhmint/HParty"><LinkedInIcon /></a>
            </div>
            <span>or use your email for registeration</span>
            <input type="text" placeholder='Name' />
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='Password' />
            <button >Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in">
          <form>
            <h1 >Sign In</h1>
            <div className="social-icons">
              <a href="https://github.com/trananhmint/HParty"><GoogleIcon /></a>
              <a href="https://github.com/trananhmint/HParty"><FacebookIcon /></a>
              <a href="https://github.com/trananhmint/HParty"><GitHubIcon /></a>
              <a href="https://github.com/trananhmint/HParty"><LinkedInIcon /></a>
            </div>
            <span>or use your email password</span>
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='Password' />
            <a href="1">Forgot Your Password?</a>
            <button>Login</button>
          </form>
        </div>
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1>Welcome Back!</h1>
              <p>Enter your personal details to use all of site of features</p>
              <button className='hidden' id='login' onClick={() => setIsActive(false)}>Login</button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>Hello, Friend</h1>
              <p>Register with your personal details to use all of site features</p>
              <button className='hidden' id='register' onClick={() => setIsActive(true)}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default LoginSignup