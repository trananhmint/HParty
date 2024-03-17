
import axios  from 'axios';

const fetchRoom = () => {
    return axios.get('https://bookingbithdayparty.azurewebsites.net/api/Room/rooms',  {
        withCredentials:true
    });
    
}

export {fetchRoom};