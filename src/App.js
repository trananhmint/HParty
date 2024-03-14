
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import LoginSignup from './Pages/LoginSignup';
import rooms_banner from './Components/Assets/VenueBanner.jpg';
import decorations_banner from './Components/Assets/decorations_banners.jpg';
import foods_banner from './Components/Assets/foods_banner.jpg';
import waiters_banner from './Components/Assets/waiter_service.png'
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
import RoomCategory from './Pages/RoomCategory';
import RoomService from './Pages/RoomService';
import BookedService from './Pages/BookedService';
import { ToastContainer } from 'react-toastify';
import AllRooms from './Pages/AllRooms';
import EditService from './Components/EditForm/EditService';
import CustomerProfile from './Pages/CustomerProfile';
import MyOrder from './Pages/MyOrder';
import { CusProfile } from './Pages/CusProfile';
import CusAddress from './Pages/CusAddress';
import RoomModalUnstyled from './Components/EditForm/EditRoom';
import HostDisplay from './Pages/HostDisplay';
import { HostProfile } from './Pages/HostProfile';
import { HostServices } from './Pages/HostServices';
import { HostRooms } from './Pages/HostRooms';
import OTPCode from './Components/ForgetPassword/OTPCode';
import OTP from './Pages/OTP';
import HostTransactionHistoryPage from './Pages/HostTransactionHistory';
import CustTransactionHistoryPage from './Pages/CustTransactionHistory';
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>

          <Routes>
            <Route path='/signup' element={<LoginSignup />} />
            <Route element={<PrivateRoute />}>
              <Route path='/' element={<Homepage />} />
            </Route>
            <Route path='/service' element={<Service value="2" />} >
              <Route path=':serviceId' element={<Service />} />
            </Route>
            <Route path='/roomService' element={<RoomService value="2" />} >
              <Route path=':roomId' element={<RoomService />} />
            </Route>
            <Route path='/rooms' element={<RoomCategory banner={rooms_banner} />} />
            <Route path='/decorations' element={<ServiceCategory categoryId="1" banner={decorations_banner} />} />
            <Route path='/foods' element={<ServiceCategory categoryId="2" banner={foods_banner} />} />
            <Route path='/waiters' element={<ServiceCategory categoryId="3" banner={waiters_banner} />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/search' element={<SearchPage />} />
            <Route path='/bookingService' element={<BookingService />} />
            <Route path='/bookedService' element={<BookedService />} />
            <Route path="/contractByPH" element={<ContractPageByPH />} />
            <Route path='/contract' element={<ContractPage />} />
            <Route path='/alerts' element={<Alerts />} />
            <Route path='/otp' element={<OTP />} />
            <Route path='/customer' element={<CustomerProfile />} />
            <Route path='/customer-profile' element={<CusProfile />} />
            <Route path='/my-address' element={<CusAddress />} />
            <Route path='/my-order' element={<MyOrder />}></Route>
            <Route path='/all-promotion'></Route>
            <Route path="/my-transaction-history" element={<CustTransactionHistoryPage/>} />
            

          </Routes>
          <Routes>
            <Route element={<PrivateRoute />}>
              <Route path='/host' element={<HostDisplay />} />
            </Route>
            <Route path='/host-profile' element={<HostProfile />} />
            <Route path='/host-services' element={<HostServices />} />
            <Route path='/host-rooms' element={<HostRooms />} />
            <Route path="/host-transaction-history" element={<HostTransactionHistoryPage/>} />
          </Routes>
          <Routes>
            <Route element={<PrivateRoute />}>
              <Route path="/admin" element={<AdminPage />} />
            </Route>
            <Route path="/all-users" element={<AllUsers />} />
            <Route path="/all-services" element={<AllServices />} />
            <Route path="/all-contracts" element={<AllContracts />} />
            <Route path="/all-rooms" element={<AllRooms />} />
            <Route path="/admin-profile" element={<AdminProfile />} />
            <Route path="/notification" element={<Notification />} />
            <Route path='/editRoom' element={<RoomModalUnstyled />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </div >
  );
}

export default App;