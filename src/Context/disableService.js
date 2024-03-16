
import axios from 'axios';

const disableService = (id) => {
    return axios.put(`https://bookingbithdayparty.azurewebsites.net/api/Service/disabelservice/${id}`)
};

export { disableService };

