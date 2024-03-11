import React, { useEffect, useState } from 'react'
import './EmailAccount.css'
import axios from 'axios';

const EmailAccount = () => {

    const [user, setUser] = useState();
    const [existEmail, setExistEmail] = useState({
        email: ""
    });

    const fetchUser = async () => {
        try {
            const response = await axios.get("https://bookingbithdayparty.azurewebsites.net/api/users",
                {
                    withCredentials: true
                }
            )
            console.log(response);
            setUser(response.data.data);
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchUser()
    }, [])

    console.log(user);

    const handleInput = (e) => {
        const { name, value } = e.target;
        setExistEmail((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const checkEmail = user.some((user) => {
            return user.email === existEmail.email;
        });
        console.log(checkEmail);
    }



    return (
        <form onSubmit={onSubmit}>
            <div className='emailaccount'>
                <div className='emailaccount-box'>
                    <h2 className='emailaccount-title'>Finding Your Account</h2>
                    <hr />
                    <p>Please enter email to find your account and send OTP code</p>
                    <input type="email" name='email' onChange={handleInput} placeholder='Enter your email' />
                    <div><button type='submit'>Find</button></div>
                </div>
            </div>
        </form>
    )
}

export default EmailAccount