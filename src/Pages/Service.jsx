
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ServiceDisplay from '../Components/ServiceDisplay/ServiceDisplay';
import Breadcrumb from '../Components/Breadcrumbs/Breadcrumb';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import Feedback from '../Components/Feedback/Feedback';
import { fetchService } from '../Context/fetchService';
import Descriptionbox from '../Components/DescriptionBox/Descriptionbox';
import HostServiceInfo from '../Components/HostServiceInfo/HostServiceInfo';
import CircularProgress from '@mui/material/CircularProgress';
import BackButton from '../Components/BackButton/BackButton';


export const Service = () => {
  const [items, setItems] = useState([]);
  const { serviceId } = useParams();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      let response = await fetchService()
      setItems(response.data.data.find((e) => { return e.serviceId === Number(serviceId) }));
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="loading-spinner-container">
        <CircularProgress color="primary" size={60} thickness={5} />
      </div>
    );
  }


  return (
    <div className='service'>
      <Navbar />
      {/* <BackButton/> */}
      <Breadcrumb service={items} />
      <ServiceDisplay service={items} />
      <HostServiceInfo service={items} />
      <Descriptionbox service={items} />
      <Feedback service={items} />
      <Footer />

    </div>
  )
}
export default Service;