import React, { useEffect, useRef, useState } from 'react'
import './CSS/LoginSignup.css'
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const LoginSignup = () => {
  const ref = useRef(null);
  const[isActive, setIsActive] = useState(true);


//  const container = useEffect(()=>{
//     const element = ref.current;
//     console.log(element)
//   }, [])

  // const handleClick = () => {
  //   const container = ref.current;
  //   console.log(container);

  // }



  return (
    // <div className='loginsignup'>
    //   <div className="loginsignup-container">
    //     <h1>Sign Up</h1>
    //     <div className="loginsignup-fields">
    //       <input type="text" placeholder='Your name' />
    //       <input type="text" placeholder='Email address' />
    //       <input type="password" placeholder='Password' />
    //     </div>
    //     <button>Continue</button>
    //     <p className='loginsignup-login'>Already have an account <span>Login here</span></p>
    //     <div className="loginsignup-agree">
    //       <input type="checkbox" name="" id="" />
    //       <p>By countinuing, I agree to the terms of use & privacy policy.</p>
    //     </div>

    //   </div>

    // </div>
    <div className='Loginsignup'>
      <div  ref={ref} id='container'className ={isActive  ? 'container active': 'container'}>
        <div className="form-container sign-up">
          <form>
            <h1>Create Account</h1>
            <div className="social-icons">
              <a href=""><GoogleIcon /></a>
              <a href=""><FacebookIcon /></a>
              <a href=""><GitHubIcon /></a>
              <a href=""><LinkedInIcon /></a>
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
              <a href=""><GoogleIcon /></a>
              <a href=""><FacebookIcon /></a>
              <a href=""><GitHubIcon /></a>
              <a href=""><LinkedInIcon /></a>
            </div>
            <span>or use your email password</span>
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='Password' />
            <a href="#">Forgot Your Password?</a>
            <button>Login</button>
          </form>
        </div>
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1>Welcome Back!</h1>
              <p>Enter your personal details to use all of site of features</p>
              <button className='hidden' id='login' onClick={()=>setIsActive(false)}>Login</button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>Hello, Friend</h1>
              <p>Register with your personal details to use all of site features</p>
              <button className='hidden' id='register' onClick={()=>setIsActive(true)}>Sign Up</button>
            </div>
          </div>

        </div>

      </div>
    </div>

  )
}

export default LoginSignup