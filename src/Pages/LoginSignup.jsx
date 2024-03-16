import React, { useEffect, useRef, useState } from 'react'
import './CSS/LoginSignup.css'
import axios from 'axios';
import { useAuth } from '../Context/AuthProvider';
import { toast } from 'react-toastify';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import 'react-toastify/dist/ReactToastify.css';

const LoginSignup = () => {

  const [provinceId, setProvinceId] = React.useState(0);
  const [districtId, setDistrictId] = useState(0)
  const [wardId, setWardId] = useState(0);
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [numberAddress, setNumberAddress] = useState('');


  const handleProvinceChange = (event) => {
    setProvinceId(event.target.value);
  };
  const handleDistrictChange = (event) => {
    setDistrictId(event.target.value);
  };
  const handleWardChange = (event) => {
    setWardId(event.target.value);
  };

  const handleNumberAddressChange = (event) => {
    setNumberAddress(event.target.value);
  };




  const [input, setInput] = useState({
    email: "",
    password: "",
  });



  const fetchProvinces = async () => {
    try {
      const response = await axios.get('https://vapi.vnappmob.com/api/province/',
        {
          headers: {
            "Content-Type": "application/json"
          },
        }
      )
      setProvinces(response.data.results);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchProvinces();
  }, []);


  const fetchDistrict = async (provinceId) => {
    try {
      const response = await axios.get(`https://vapi.vnappmob.com/api/province/district/${provinceId}`,
        {
          headers: {
            "Content-Type": "application/json"
          },
        }
      )
      setDistricts(response.data.results);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    if (provinceId) {
      fetchDistrict(provinceId)
    }
  }, [provinceId]);

  const fetchWard = async (districtId) => {
    try {
      const response = await axios.get(`https://vapi.vnappmob.com/api/province/ward/${districtId}`,
        {
          headers: {
            "Content-Type": "application/json"
          },
        }
      )
      setWards(response.data.results);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    if (districtId) {
      fetchWard(districtId)
    }
  }, [districtId]);

  function addressName(provinceId, districtId, wardId, numberAddress) {
    let addressName = '';
    const provinceName = provinces.find((province) => provinceId === province.province_id);
    const districtName = districts.find((district) => districtId === district.district_id);
    const wardName = wards.find((ward) => wardId === ward.ward_id);
    if (provinceName !== undefined && districtName !== undefined && wardName !== undefined) {
      return addressName = numberAddress + ', ' + provinceName.province_name + ", " + districtName.district_name + ", " + wardName.ward_name
    }
    else {
      return addressName;
    }
  }

  const [register, setRegister] = useState({
    fullname: "",
    email: "",
    password: "",
    address: "",
    phone: "",
    roleId: 0
  })


  useEffect(() => {
    // Assuming provinceId, districtId, and wardId are defined somewhere
    const address = addressName(provinceId, districtId, wardId, numberAddress);
    setRegister(prev => ({ ...prev, address }));
  }, [provinceId, districtId, wardId, numberAddress]);

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
      localStorage.setItem("confirmEmail", JSON.stringify(register.email));
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
            {/* <span>or use your email for registeration</span> */}
            <div className='input-field-register'>
              <input type="text" id='register-fullname' name='fullname' aria-describedby='register-fullname' aria-invalid="false" onChange={handleRegisterInput} placeholder='FullName' />
              <select name='roleId' defaultValue={0} onChange={handleRegisterInput}>
                <option value={0} disabled>Select User Type</option>
                <option value={1} >Customer</option>
                <option value={2} >Party Host</option>
              </select>
              <input type="email" id='register-email' name='email' aria-describedby='register-email' aria-invalid="false" onChange={handleRegisterInput} placeholder='Email' />
              <input type="password" id='register-password' name='password' aria-describedby='register-password' aria-invalid="false" onChange={handleRegisterInput} placeholder='Password' />
              <input style={{ width: '100%' }} type="text" id='register-numberAddress' name='numberAddress' aria-describedby='register-numberAddress' aria-invalid="false" onChange={handleNumberAddressChange} placeholder='Number Address' />
              {/* <input type="text" id='register-address' name='address' aria-describedby='register-address' aria-invalid="false" onChange={handleRegisterInput} placeholder='Address' /> */}
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Province</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={provinceId}
                  label="Province"
                  onChange={handleProvinceChange}
                >
                  <MenuItem value={0} disabled>Select Province</MenuItem>
                  {provinces.map((province) => {
                    return <MenuItem value={province.province_id}>{province.province_name}</MenuItem>
                  })}

                </Select>
              </FormControl>

              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">District</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={districtId}
                  label="District"
                  onChange={handleDistrictChange}
                >
                  <MenuItem value={0} disabled>Select District</MenuItem>
                  {districts.map((district) => {
                    return <MenuItem value={district.district_id}>{district.district_name}</MenuItem>
                  })}
                </Select>
              </FormControl>


              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Ward</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={wardId}
                  label="Ward"
                  onChange={handleWardChange}
                >
                  <MenuItem value={0} disabled>Select Ward</MenuItem>
                  {wards.map((ward) => {
                    return <MenuItem value={ward.ward_id}>{ward.ward_name}</MenuItem>
                  })}
                </Select>
              </FormControl>

              <input type="text" id='register-phone' name='phone' aria-describedby='register-phone' aria-invalid="false" onChange={handleRegisterInput} placeholder='Phone' />
            </div>
            <button >Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in">
          <form onSubmit={handleSubmitEvent} >
            <h1 >Sign In</h1>
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