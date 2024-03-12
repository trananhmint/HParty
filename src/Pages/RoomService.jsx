import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ServiceDisplay from '../Components/ServiceDisplay/ServiceDisplay';
import Breadcrumb from '../Components/Breadcrumbs/Breadcrumb';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import Feedback from '../Components/Feedback/Feedback';
import axios from 'axios';
import Descriptionbox from '../Components/DescriptionBox/Descriptionbox';
import HostServiceInfo from '../Components/HostServiceInfo/HostServiceInfo';
import CircularProgress from '@mui/material/CircularProgress';

export const RoomService = () => {
  const [items, setItems] = useState([]);
  const { roomId } = useParams();
  const [loading, setLoading] = useState(true);
  console.log(roomId);
  useEffect(() => {
    async function fetchData() {
      let response = await axios.get('https://bookingbirthdayparties.azurewebsites.net/api/Room/rooms')
      setItems(response.data.data.find((e) => { return e.roomId === Number(roomId) }));
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
      <Breadcrumb service={items} />
      <ServiceDisplay service={items} />
      <HostServiceInfo />
      <Descriptionbox />
      {/* <Feedback /> */}
      <Footer />
    </div>
  )
}

export default RoomService;