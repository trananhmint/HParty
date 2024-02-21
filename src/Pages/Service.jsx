import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom';
import ServiceDisplay from '../Components/ServiceDisplay/ServiceDisplay';
import Breadcrumb from '../Components/Breadcrumbs/Breadcrumb';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import { ServiceContext } from '../Context/ServiceContext';
import Feedback from '../Components/Feedback/Feedback';
import { fetchService } from '../Context/fetchService';
import { useEffect } from 'react';
import axios from 'axios';




export const Service = () => {
  const [items, setItems] = useState([]);
  const { serviceId } = useParams();
  useEffect(()=>{
    async function fetchData () {
    let response = await axios.get('https://bookingbirthdayparties.azurewebsites.net/api/Service/services')
    setItems(response.data.data.find((e)=>{return e.serviceId === Number(serviceId)}));
    console.log(response.data);}
    fetchData();
  }, []);

  console.log(serviceId);
  return (
    <div className='service'>
      <Navbar />
      <Breadcrumb service={items} />
      <ServiceDisplay service={items} />
      <Feedback />
      <Footer />
    </div>
  )
}




export default Service;