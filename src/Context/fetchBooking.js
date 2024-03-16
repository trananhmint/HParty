
import axios  from 'axios';

const fetchBooking = () => {
    return axios.get('https://bookingbithdayparty.azurewebsites.net/api/Booking');
    
}

export {fetchBooking};