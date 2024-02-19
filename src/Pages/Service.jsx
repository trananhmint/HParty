import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import ServiceDisplay from '../Components/ServiceDisplay/ServiceDisplay';
import Breadcrumb from '../Components/Breadcrumbs/Breadcrumb';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import { ServiceContext } from '../Context/ServiceContext';

const Service = () => {
  const {all_service} = useContext(ServiceContext);
  console.log(all_service);
  const {serviceId} = useParams();
  console.log(serviceId);
  const service = all_service.find((e)=>{
    return Number(e.id) === Number(serviceId);
  });
  console.log("service " + service); 
  return (
    <div className='service'>
      <Navbar/>
      <Breadcrumb service={service}/>
      <ServiceDisplay service={service} />
      
      <Footer/>
    </div>
  )
}

export default Service