
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Manage from './components/manage/manage';
import View from './components/view/view';
import Profile from './components/profile/profile';
import History from './components/history/history';

import "./App.css";
import Dashboard from "./components/dashboard/dashboard";

function App() {
  return (
    <div data-theme="cupcake">
  
      <Router>
        <Routes>
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
