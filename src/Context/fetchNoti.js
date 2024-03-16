import axios from 'axios';

const fetchNoti = (id) => {
  return axios.get(`https://bookingbithdayparty.azurewebsites.net/api/Notification/${id}`, {
    withCredentials: true
  });
}

export { fetchNoti };
