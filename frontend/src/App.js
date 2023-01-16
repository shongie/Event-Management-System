
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Manage from './components/manage/manage';
import View from './components/view/view';
import Profile from './components/profile/profile';
import History from './components/history/history';
import Add from "./components/manage/add";
import Edit from "./components/manage/edit";
import Login from './Login';
import Registration from './Register';
import ForgotPasswordPage from './password'

import "./App.css";
import Dashboard from "./components/dashboard/dashboard";


interface RoutesProps {
  children?: React.ReactNode;
  location?: Partial<Location> | string;
}


function App() {
  return (
    <div >
  
      <Router>
        <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/forgot-password' element={<ForgotPasswordPage/>}></Route>
        <Route path='/register' element={<Registration/>}></Route>
          <Route path="/create" element={<Add />} /> 
          <Route path="/edir" element={<Edit />} />
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="manage" element={<Manage/>}></Route>
          <Route path="view" element={<View/>}></Route>
          <Route path="history" element={<History/>}></Route>
          <Route path="profile" element={<Profile/>}></Route>
        </Routes>
      </Router>

    
    </div>

   

    //routes
  );
}

export default App;
