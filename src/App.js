import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Homepage from './Pages/Homepage';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import rooms_banner from './Components/Assets/rooms_banner.jpg';
import decorations_banner from './Components/Assets/decorations_banners.jpg';
import foods_banner from './Components/Assets/foods_banner.jpg';
import waiters_banner from './Components/Assets/waiters_banner.png'
import Cart from './Pages/Cart';
import ServiceCategory from './Pages/ServiceCategory';
import Service from './Pages/Service';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/signup' element={<LoginSignup />} />
          <Route path='/service' element={<Service />} >
            <Route path=':serviceId'element={<Service/>}/>
          </Route>
          <Route path='/rooms' element={<ServiceCategory category="rooms" banner={rooms_banner} />} />
          <Route path='/decorations' element={<ServiceCategory category="decorations" banner={decorations_banner} />} />
          <Route path='/foods' element={<ServiceCategory category="foods" banner={foods_banner} />} />
          <Route path='/waiters' element={<ServiceCategory category="waiters" banner={waiters_banner} />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
