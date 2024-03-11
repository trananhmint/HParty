import axios from "axios";

const fetchLogin = () =>{
    return axios.post('https://bookingbithdayparty.azurewebsites.net/api/Authentication/login')
}