
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ServiceDisplay from '../Components/ServiceDisplay/ServiceDisplay';
import Breadcrumb from '../Components/Breadcrumbs/Breadcrumb';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import { ServiceContext } from '../Context/ServiceContext';
import Feedback from '../Components/Feedback/Feedback';
import axios from 'axios';
import { fetchService } from '../Context/fetchService';
import Descriptionbox from '../Components/DescriptionBox/Descriptionbox';
import HostServiceInfo from '../Components/HostServiceInfo/HostServiceInfo';


export const Service = () => {
  const [items, setItems] = useState([]);
  const { serviceId } = useParams();
  useEffect(() => {
    async function fetchData() {
      let response = await axios.get('https://bookingbithdayparty.azurewebsites.net/api/Service/services')
      setItems(response.data.data.find((e) => { return e.serviceId === Number(serviceId) }));
    }
    fetchData();
  }, []);

  return (
    <div className='service'>
      <Navbar />
      <Breadcrumb service={items} />
      <ServiceDisplay service={items} />
      <HostServiceInfo />
      <Descriptionbox />
      <Feedback />
      <Footer  />
    </div>
  )
}
export default Service;