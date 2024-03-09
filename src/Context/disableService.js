
import axios from 'axios';

const disableService = (id) => {
    return axios.put(`https://bookingbirthdayparties.azurewebsites.net/api/Service/disabelservice/${id}`)
};

export { disableService };

