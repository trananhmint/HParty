import axios from 'axios';

const disableUser = (id) => {
    return axios.put(`https://bookingbirthdayparties.azurewebsites.net/api/Authentication/disableUser${id}`)
};

export { disableUser };
