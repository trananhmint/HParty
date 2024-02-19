// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import AdminPage from './Pages/AdminPage';
import AdminProfile from './Pages/Adminprofile';
import Notification from './Pages/Notification'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/admin" element={<AdminPage/>} />
        <Route path="/admin-profile" element={<AdminProfile/>} />
        <Route path="/notification" element={<Notification/>} />
        </Routes> 
        
      </BrowserRouter>
    </div>
  );
}

export default App;
