import React from 'react'
import Banner from '../Components/Banner/Banner';
import Category from '../Components/Category/Category';
import EventCollections from '../Components/EventCollections/EventCollections';
import Offers from '../Components/Offers/Offers';
import PopularServices from '../Components/PopularServices/PopularServices';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

export const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Category />
      <EventCollections />
      <Offers />
      <PopularServices />
      <Footer />
    </div>
  )

}

export default Homepage;