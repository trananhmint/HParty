import React, { useState } from 'react'
import Navbar from '../Components/Navbar/Navbar';
import BookedServiceTabs from '../Components/BookedService/BookedServiceTabs';
import Footer from '../Components/Footer/Footer';
const BookedService = () => {



    return (
        <div className='bookedservice'>
            <Navbar />
            <BookedServiceTabs/>
            <Footer/>
        </div>
    )
}

export default BookedService