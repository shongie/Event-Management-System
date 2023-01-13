
import './App.css';
import Login from './Login';
import Registration from './Register';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ForgotPasswordPage from './password';

function App() {
  return (
    <>
    <Router>
 
<Routes>
    <Route path='/forgot-password' element={<ForgotPasswordPage/>}></Route>
            <Route path='/' element={<Login/>}></Route></Routes>
           
    </Router>
    </>
   

  );
}

export default App;
