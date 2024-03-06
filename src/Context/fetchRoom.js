
import axios  from 'axios';

const fetchRoom = () => {
    return axios.get('https://bookingbirthdayparties.azurewebsites.net/api/Room/rooms');
    
}

export {fetchRoom};