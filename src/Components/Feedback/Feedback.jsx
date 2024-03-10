import React from 'react'
import StarRateIcon from '@mui/icons-material/StarRate';
import StarRateOutlinedIcon from '@mui/icons-material/StarRateOutlined';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import Rating from '@mui/material/Rating';

import './Feedback.css'
import axios from 'axios';

export const Feedback = (serviceId) => {

    const [value, setValue] = React.useState(2);
    const [services, setServices] = React.useState();

    const fetchFeedback = async (data) => {
        try {
            const response = await axios.get("");
            console.log(response.data);
            setServices(response.data);
        }
        catch (error) {
            console.log(error);
        }
    }

    const feedbacks = services.find((service) => {
        if (service.serviceId === serviceId) {
            return service.feedback;
        }

    })

    return (
        <div className='feedback'>
            <p>FEEDBACK</p>
            {feedbacks.map((feedback) => {
                return <div>
                    <div className="feedback-frame">
                        <div className="feedback-avatar">
                            <Avatar
                                sx={{ bgcolor: deepOrange[500] }}
                                alt="Trung Sơn"
                                src="/broken-image.jpg"
                            />
                        </div>
                        <div className="feedback-frame-right">
                            <div className="feedback-frame-name">
                                <p>{feedback.name}</p>
                                <div className="feedback-frame-stars">
                                    <Rating name="read-only" value={feedback.rating} readOnly />
                                </div>
                                <div className="feedback-frame-time">
                                    <p>{feedback.time}</p>
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
                            <div className="feedback-frame-reply">
                                <h4>Reply from Host</h4>
                                <p>{feedback.content}</p>
                            </div>
                        </div>
                    </div>
                    <hr />
                </div>

            })}
        </div>
    )
}

export default Feedback;