import React, { useRef, useState } from 'react'
import './CSS/LoginSignup.css'
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useAuth } from '../Context/AuthProvider';
import Alert from '@mui/material/Alert';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginSignup = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [register, setRegister] = useState({
    fullname: "",
    email: "",
    password: "",
    address: "",
    phone: "",
    roleId: 0
  })





  const auth = useAuth();
  const handleSubmitEvent = (e) => {
    e.preventDefault();
    if (input.email !== "" && input.password !== "") {
      auth.fetchLogin(input);
      return;
    }
    toast.warning('Please enter your email and password', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",

    });

  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    if (name === "roleId") {
      setInput((prev) => ({
        ...prev,
        [name]: Number(value),
      }));
    } else {
      setInput((prev) => ({
        ...prev,
        [name]: value,
      }));
    }

  };



  const handleRegisterInput = (e) => {
    const { name, value } = e.target;
    if (name === "roleId") {
      setRegister((prev) => ({
        ...prev,
        [name]: Number(value),
      }));
    } else {
      setRegister((prev) => ({
        ...prev,
        [name]: value,
      }));
    }

  };

  const handleSubmitRegisterEvent = (e) => {
    e.preventDefault();
    if (register.fullname !== "" && register.email !== "" && register.password !== "" && register.address !== ""
      && register.phone !== "" && register.roleId !== 0) {
      auth.fetchRegister(register);
      localStorage.setItem("confirmEmail",JSON.stringify(register.email));
      return;
    } else if (register.fullname === "") {
      toast.warning('Please input your Full Name', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",

      });
    } else if (register.email === "") {
      toast.warning('Please input your Email', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",

      });
    } else if (register.password === "") {
      toast.warning('Please create your Password', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",

      });
    } else if (register.address === "") {
      toast.warning('Please input your Address', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",

      });
    } else if (register.phone === "") {
      toast.warning('Please input your Phone', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",

      });
    } else if (register.roleId === 0) {
      toast.warning('Please choose your Role', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",

      });
    }

    else {
      toast.warning('Please fill in the register form', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",

      });
      // alert("Please fill in the register form");
    }

  };



  const ref = useRef(null);
  const [isActive, setIsActive] = useState(true);

  return (
    <div className='Loginsignup'>
      <div ref={ref} id='container' className={isActive ? 'container active' : 'container'}>
        <div className="form-container sign-up">
          <form onSubmit={handleSubmitRegisterEvent}>
            <h1>Create Account</h1>
            <div className="social-icons">
              <a href="https://github.com/trananhmint/HParty"><GoogleIcon /></a>
              <a href="https://github.com/trananhmint/HParty"><FacebookIcon /></a>
              <a href="https://github.com/trananhmint/HParty"><GitHubIcon /></a>
              <a href="https://github.com/trananhmint/HParty"><LinkedInIcon /></a>
            </div>
            <span>or use your email for registeration</span>
            <div className='input-field-register'>
              <input type="text" id='register-fullname' name='fullname' aria-describedby='register-fullname' aria-invalid="false" onChange={handleRegisterInput} placeholder='FullName' />
              <select name='roleId' defaultValue={0} onChange={handleRegisterInput}>
                <option value={0} disabled>Select User Type</option>
                <option value={1} >Customer</option>
                <option value={2} >Party Host</option>
              </select>
              <input type="email" id='register-email' name='email' aria-describedby='register-email' aria-invalid="false" onChange={handleRegisterInput} placeholder='Email' />
              <input type="password" id='register-password' name='password' aria-describedby='register-password' aria-invalid="false" onChange={handleRegisterInput} placeholder='Password' />
              <input type="text" id='register-address' name='address' aria-describedby='register-address' aria-invalid="false" onChange={handleRegisterInput} placeholder='Address' />
              <input type="text" id='register-phone' name='phone' aria-describedby='register-phone' aria-invalid="false" onChange={handleRegisterInput} placeholder='Phone' />
            </div>
            <button >Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in">
          <form onSubmit={handleSubmitEvent} >
            <h1 >Sign In</h1>
            <div className="social-icons">
              <a href="https://github.com/trananhmint/HParty"><GoogleIcon /></a>
              <a href="https://github.com/trananhmint/HParty"><FacebookIcon /></a>
              <a href="https://github.com/trananhmint/HParty"><GitHubIcon /></a>
              <a href="https://github.com/trananhmint/HParty"><LinkedInIcon /></a>
            </div>
            <span>or use your email password</span>
            <input type="email" id='user-email' name='email' aria-describedby='user-email' aria-invalid="false" onChange={handleInput} placeholder='Email' />
            {/* <div id='user-email' className='sr-only'>
              Please enter a valid username. It must contain at least 6 characters.
            </div> */}
            <input type="password" id='user-password' name='password' aria-describedby='user-password' aria-invalid="false" onChange={handleInput} placeholder='Password' />
            {/* <div id='user-password' className='sr-only'>
              Your password should be more than 6 character
            </div> */}
            <a href="1">Forgot Your Password?</a>
            <button type='submit' >Login</button>
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

// LoginSignup.propTypes = {
//   setToken: PropTypes.func.isRequired,
// }

export default LoginSignup