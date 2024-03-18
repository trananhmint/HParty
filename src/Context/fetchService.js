
import axios  from 'axios';

const fetchService = () => {
    return axios.get('https://bookingbithdayparty.azurewebsites.net/api/Service/services', {
        withCredentials: true
    });
    
}

export {fetchService};