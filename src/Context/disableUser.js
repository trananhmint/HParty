import axios from 'axios';

const disableUser = (id) => {
    return axios.put(`https://bookingbithdayparty.azurewebsites.net/api/User/disabeluser/${id}` ,null,  { withCredentials: true })
};

export { disableUser };
