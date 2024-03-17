
import axios from 'axios';

const fetchUser = () => {
    return axios.get('https://bookingbithdayparty.azurewebsites.net/api/users', {
        withCredentials: true,
    });
}

export { fetchUser };