import React, { useRef, useState } from 'react'
import './CSS/LoginSignup.css'
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useAuth } from '../Context/AuthProvider';

const LoginSignup = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const auth = useAuth();
  const handleSubmitEvent = (e) => {
    e.preventDefault();
    if (input.email !== "" && input.password !== "") {
      auth.fetchLogin(input);
      return;
    }
    alert("Please enter your email and password");
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  const [register, setRegister] = useState({
    fullname: "",
    email:"",
    password:"",
  })

  const handleRegisterInput = (e) => {
    const { name, value } = e.target;
    setRegister((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmitRegisterEvent = (e) => {
    e.preventDefault();
    if (register.fullname !== "" && register.email !== "" && register.password !== "") {
      auth.fetchRegister(register);
      return;
    }
    alert("Please fill in the register form.");
  };


  // const {setToken} = props;
  // const handleSubmit = e => {
  //   e.preventDefault();

  //   axios
  //     .post("https://bookingbirthdayparties.azurewebsites.net/api/Authentication/login", { email, password })
  //     .then(response =>{
  //       console.log(response);

  //     })
  //     .catch(error =>{
  //       console.log("This is not a valid login");
  //     })
  // }

  // async function loginUser(credentials) {
  //   try {
  //     const response = await axios.post('https://bookingbirthdayparties.azurewebsites.net/api/Authentication/login', credentials, {
  //       headers: {
  //         'Content-Type': 'application/json'
  //       }
  //     });
  //     return response.data;
  //   } catch (error) {
  //     // Xử lý lỗi nếu cần
  //     console.error('Error during login:', error);
  //     throw error;
  //   }
  // }

  // const [email, setEmail] = useState()
  // const [password, setPassword] = useState()

  // const handleSubmit = async e => {
  //   e.preventDefault();
  //   const token = await loginUser({
  //     email,
  //     password
  //   })
  //   setToken(token);
  //   console.log(token);
  // }

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
            <input type="text" id='register-fullname' name='fullname' aria-describedby='register-fullname' aria-invalid="false" onChange={handleRegisterInput}  placeholder='FullName' />
            <input type="email" id='register-email' name='email' aria-describedby='register-email' aria-invalid="false" onChange={handleRegisterInput} placeholder='Email' />
            <input type="password" id='register-password' name='password' aria-describedby='register-password' aria-invalid="false" onChange={handleRegisterInput} placeholder='Password' />
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