import axios from 'axios';

const disableUser = (id) => {
    return axios.put(`https://bookingbithdayparty.azurewebsites.net/api/Authentication/disableUser${id}`)
};

export { disableUser };
