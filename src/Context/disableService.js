
import axios from 'axios';

const disableService = (id) => {
    return axios.delete(`https://bookingbirthdayparties.azurewebsites.net/api/Service/${id}`);
    
};

export { disableService };

