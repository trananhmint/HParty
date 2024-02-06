// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import SideBar from './Components/Sidebar/Sidebar';
import AdminProfile from './Components/Adminprofile/Adminprofile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <SideBar/>
        <Routes>
        <Route path="/admin-profile" component={<AdminProfile/>} />
        </Routes> 
        
      </BrowserRouter>
    </div>
  );
}

export default App;
