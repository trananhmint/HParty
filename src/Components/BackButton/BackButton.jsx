import React from 'react'
import "./BackButton.css"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
export const BackButton = () => {

    const handleGoBack = () => {
        window.history.back();
    };

    return (
        <button className='button-back' onClick={handleGoBack}>
            <ArrowBackIcon/>
        </button>
    );
}

export default BackButton
