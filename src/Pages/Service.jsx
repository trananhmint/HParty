import React, { useContext } from 'react'
import { ServiceContext } from '../Components/Context/ServiceContext'
import { useParams } from 'react-router-dom';
import ServiceDisplay from '../Components/ServiceDisplay/ServiceDisplay';
import Breadcrumb from '../Components/Breadcrumbs/Breadcrumb';

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
      <Breadcrumb service={service}/>
      <ServiceDisplay service={service} />

    </div>
  )
}

export default Service