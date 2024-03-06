
import axios  from 'axios';

const fetchUser = () => {
    return axios.get('https://bookingbirthdayparties.azurewebsites.net/api/users');
}

export {fetchUser};