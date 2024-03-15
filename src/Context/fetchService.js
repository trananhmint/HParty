
import axios  from 'axios';

const fetchService = () => {
    return axios.get('https://bookingbirthdayparties.azurewebsites.net/api/Service/services');
    
}

export {fetchService};