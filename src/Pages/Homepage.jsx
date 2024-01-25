import React from 'react'
import Banner from '../Components/Banner/Banner';
import Category from '../Components/Category/Category';
import EventCollections from '../Components/EventCollections/EventCollections';
import Offers from '../Components/Offers/Offers';
import PopularServices from '../Components/PopularServices/PopularServices';

export const Homepage = () => {
  return (
    <div>
        <Banner/>
        <Category/>
        <EventCollections/>
        <Offers/>
        <PopularServices/>
    </div>
  )

}

export default Homepage;