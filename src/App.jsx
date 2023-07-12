
import { Routes, Route, } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import axios from 'axios';
import {Toaster} from 'react-hot-toast'
import { UserContextProvider } from '../context/userContext';
import Dashboard from './pages/Dashboard';
import ResetPassword from './pages/resetPassword';
import Forgetpassword from './pages/Forgetpassword';
import { useSelector } from 'react-redux';

import Message from './pages/Message';
import Sidebar from './components/SideBar';
import Fileupload from './pages/Fileupload';
import Kashmir from './pages/Kashmir';
import Brazil from './pages/Brazil';
import Andaman from './pages/Andaman';
import Northeast from './pages/Northest';
import Lakshadweep from './pages/Lakshadweep';
import Rajasthan from './pages/Rajasthan';
import Australia from './pages/Australia';
import Usa from './pages/Usa';
import Uk from './pages/Uk';
import Contact from './pages/Contact';




axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true
 
function App() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn)
  console.log(isLoggedIn);
  return (
    <UserContextProvider LoginUser>
         
        <Navbar/>
        <Toaster position='top-right' toastOptions={{duration: 2000}}/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/forgetpassword' element={<Forgetpassword/>} /> 
          <Route path='/resetpassword' element={<ResetPassword/>} /> 
          <Route path= "/dashboard/*" element={<Dashboard/>} />
          <Route path='/message' element={<Message/>}/> 
          <Route path='/fileupload' element={<Fileupload/>}/> 
          <Route path='/kashmir' element={<Kashmir/>}/>
          <Route path='/brazil' element={<Brazil/>}/>
          <Route path='/andaman' element={<Andaman/>}/> 
          <Route path='/northeast' element={<Northeast/>}/> 
          <Route path='/lakshadweep' element={<Lakshadweep/>}/>
          <Route path='/rajasthan' element={<Rajasthan/>}/>
          <Route path='/australia' element={<Australia/>}/>
          <Route path='/usa' element={<Usa/>}/>
          <Route path='/uk' element={<Uk/>}/>
          <Route path='/contact' element={<Contact/>}/>    
          
        
        </Routes>
            
    </UserContextProvider>

    



  )
}

export default App
