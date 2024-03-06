
import axios from 'axios';

const disableRoom = (id) => {
    return axios.put(`https://bookingbirthdayparties.azurewebsites.net/api/Room/disabelroom/${id}`);
};

export { disableRoom };