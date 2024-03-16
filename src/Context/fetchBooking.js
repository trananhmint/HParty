
import axios  from 'axios';

const fetchBooking = () => {
    return axios.get('https://bookingbirthdayparties.azurewebsites.net/api/Booking');
    
}

export {fetchBooking};