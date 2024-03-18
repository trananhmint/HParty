
import axios  from 'axios';

const fetchBooking = () => {
    return axios.get('https://bookingbithdayparty.azurewebsites.net/api/Booking',  {
        withCredentials:true,
    });
    
}

export {fetchBooking};