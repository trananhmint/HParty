import axios from 'axios';

const fetchNoti = (id) => {
  return axios.get(`https://bookingbirthdayparties.azurewebsites.net/api/Notification/${id}`);
}

export { fetchNoti };
