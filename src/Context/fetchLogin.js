import axios from "axios";

const fetchLogin = () =>{
    return axios.post('https://bookingbirthdayparties.azurewebsites.net/api/Authentication/login')
}