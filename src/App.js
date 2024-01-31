import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Homepage from './Pages/Homepage';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import Services from './Pages/Services';
import rooms_banner from './Components/Assets/rooms_banner.jpg';
import decorations_banner from'./Components/Assets/decorations_banners.jpg';
import foods_banner from './Components/Assets/foods_banner.jpg';
import services_banner from './Components/Assets/services_banner.png'
import Cart from './Pages/Cart';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/signup' element={<LoginSignup />} />
          <Route path='/rooms' element={<Services category="rooms" banner={rooms_banner}/>} />
          <Route path='/decorations' element={<Services category="decorations" banner={decorations_banner}/>}/>
          <Route path='/foods' element={<Services category="foods"  banner={foods_banner}/>}/>
          <Route path='/services' element={<Services category="services"  banner={services_banner}/>} />
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
