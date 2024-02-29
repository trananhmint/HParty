
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Navbar from './Components/Navbar/Navbar';
// import Footer from './Components/Footer/Footer';
import Homepage from './Pages/Homepage';
import LoginSignup from './Pages/LoginSignup';
import rooms_banner from './Components/Assets/rooms_banner.jpg';
import decorations_banner from './Components/Assets/decorations_banners.jpg';
import foods_banner from './Components/Assets/foods_banner.jpg';
import waiters_banner from './Components/Assets/waiters_banner.png'
import Cart from './Pages/Cart';
import ServiceCategory from './Pages/ServiceCategory';
import Service from './Pages/Service';
import SearchPage from './Pages/SearchPage';
import BookingService from './Pages/BookingService';
import Alerts from './Pages/Alerts';
import { useState } from 'react';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './router/route';
import ForgetPassword from './Pages/ForgetPassword';
import ContractPage from './Pages/ContractPage';
import { pdfjs } from 'react-pdf';
import ContractPageByPH from './Pages/ContractPageByPH';
import AdminPage from './Pages/AdminPage';
import AdminProfile from './Pages/Adminprofile';
import Notification from './Pages/Notification'
import AllUsers from './Pages/AllUsers';
import AllServices from './Pages/AllServices';
import AllContracts from './Pages/AllContracts';
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();


function App() {
  // const [token, setToken] = useState();

  // if (!token) {
  //   return <LoginSignup setToken={setToken} />
  // }
  return (
    <div className="App">
      <BrowserRouter>

        <AuthProvider>
          <Routes>
            <Route path='/signup' element={<LoginSignup />} />
            <Route element={<PrivateRoute />}>
              <Route path='/' element={<Homepage />} />
              <Route path="/admin" element={<AdminPage/>}  />
              <Route path="/admin-profile" element={<AdminProfile/>} />
              <Route path="/notification" element={<Notification/>} />
            </Route>
            <Route path='/service' element={<Service />} >
              <Route path=':serviceId' element={<Service />} />
            </Route>
            <Route path='/rooms' element={<ServiceCategory categoryId="1" banner={rooms_banner} />} />
            <Route path='/decorations' element={<ServiceCategory categoryId="2" banner={decorations_banner} />} />
            <Route path='/foods' element={<ServiceCategory categoryId="3" banner={foods_banner} />} />
            <Route path='/waiters' element={<ServiceCategory categoryId="4" banner={waiters_banner} />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/search' element={<SearchPage />} />
            <Route path='/bookingService' element={<BookingService />} />
            <Route path="/contractByPH" element={<ContractPageByPH />} />
            <Route path='/contract' element={<ContractPage />} />
            <Route path='/alerts' element={<Alerts />} />
            <Route path='/recover' element={<ForgetPassword />} />
          </Routes>
        </AuthProvider>
        <Routes>
        <Route path="/all-users" element={<AllUsers/>} />
        <Route path="/all-services" element={<AllServices/>} /> 
        <Route path="/all-contracts" element={<AllContracts/>} /> 
        </Routes> 
        
      </BrowserRouter>
        {/* <ContractPage/> */}
    </div>
  );
}

export default App;
