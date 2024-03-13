import React from 'react'
import StarRateIcon from '@mui/icons-material/StarRate';
import StarRateOutlinedIcon from '@mui/icons-material/StarRateOutlined';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import Rating from '@mui/material/Rating';

import './Feedback.css'
import axios from 'axios';

export const Feedback = (props) => {
    const {service} = props;
    
    console.log(service.serviceName);

    const [value, setValue] = React.useState(2);
    const [services, setServices] = React.useState();

    // const fetchFeedback = async (data) => {
    //     try {
    //         const response = await axios.get("https://bookingbithdayparty.azurewebsites.net/api/Service/services");
    //         console.log(response.data.data);
    //         setServices(response.data.data);
    //     }
    //     catch (error) {
    //         console.log(error);
    //     }
    // }

    // const feedbacks = services.find((service) => {
    //     console.log(service.serviceId);
    //     if (service.serviceId === service.serviceId) {
    //         return service.feedbacks;
    //     }

    // })

    const feedbacks = service.feedbacks;
    console.log(service.feedbacks);

    
    if (service.feedbacks) {
        return <div className='feedback'>
                <p>FEEDBACK</p>
                <hr />
                {feedbacks.map((feedback) => {
                    return <div>
                        <div className="feedback-frame">
                            <div className="feedback-avatar">
                                <Avatar
                                    sx={{ bgcolor: deepOrange[500] }}
                                    alt="`${feedback.fullName}`"
                                    src="/broken-image.jpg"
                                />
                            </div>
                            <div className="feedback-frame-right">
                                <div className="feedback-frame-name">
                                    <p>{feedback.fullName}</p>
                                    <div className="feedback-frame-stars">
                                        <Rating name="read-only" value={feedback.rate} readOnly />
                                    </div>
                                    <div className="feedback-frame-time">
                                        <p>{feedback.created}</p>
                                    </div>
                                </div>
    
                                <div className="feedback-frame-content">
                                    <p>{feedback.content}</p>
                                    <div className="feedback-frame-content-image">
                                        <img src="https://cdn.firstcry.com/education/2022/12/29111202/101-Of-Planning-An-Unforgettable-Kids-Birthday-Party.jpg" alt="" />
                                        <img src="https://cdn.firstcry.com/education/2022/12/29111202/101-Of-Planning-An-Unforgettable-Kids-Birthday-Party.jpg" alt="" />
                                        <img src="https://cdn.firstcry.com/education/2022/12/29111202/101-Of-Planning-An-Unforgettable-Kids-Birthday-Party.jpg" alt="" />
                                        <img src="https://cdn.firstcry.com/education/2022/12/29111202/101-Of-Planning-An-Unforgettable-Kids-Birthday-Party.jpg" alt="" />
                                    </div>
    
                                </div>
                            </div>
                        </div>
                        <hr />
                    </div>
    
                })}
            </div>
    } else {
        return <div className='feedback'>
        <p>FEEDBACK</p> 
        <hr />
        </div>
       
    }
}

export default Feedback;