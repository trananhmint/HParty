
import axios from 'axios';

const disableRoom = (id) => {
    return axios.put(`https://bookingbithdayparty.azurewebsites.net/api/Room/disabelroom/${id}`);
};

export { disableRoom };