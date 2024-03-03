
import axios from 'axios';

const deleteService = (id) => {
    return axios.delete(`https://bookingbirthdayparties.azurewebsites.net/api/Service/${id}`);
};

export { deleteService };