import React, { useEffect, useState } from 'react';
import './OTPCode.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const OTPCode = () => {
    const navigate = useNavigate();

    const queryParams = window.location.search;
    // Loại bỏ ký tự "?" ở đầu chuỗi nếu có
    const cleanQuery = queryParams.replace("?", "");
    // Tạo một đối tượng chứa thông tin từ tham số truy vấn
    const urlParams = new URLSearchParams(cleanQuery);

    const [confirmEmail, setConfirmEmail] = useState({
        tokenConfirm: "",
        email: urlParams.get("userEmail")
    });
    const fetchConfirmEmail = async (data) => {
        try {
            const response = await axios.post("https://bookingbithdayparty.azurewebsites.net/api/Authentication/verify", data,
                {
                    withCredentials: true
                }
            )
            console.log(response.data);
            toast.success('Please Log In', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            navigate("/signup")
        }
        catch (error) {
            toast.error('Your OTP Code is wrong. Please try again', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            console.log(error);
        }
    }

    const handleInput = (e) => {
        const { name, value } = e.target;
        setConfirmEmail((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        fetchConfirmEmail(confirmEmail)
    }


    return (
        <form onSubmit={onSubmit}>
            <div className='otpcode'>
                <div className="otpcode-box">
                    <h2>Verify OTP Code</h2>
                    <hr />
                    <p>OTP code is sending to you. Please enter your OTP code to verify</p>
                    <input type="text" name="tokenConfirm" onChange={handleInput} placeholder='Enter your OTP' />
                    <div><button type="submit">Send</button></div>
                </div>
            </div>
        </form>
    )
}

export default OTPCode