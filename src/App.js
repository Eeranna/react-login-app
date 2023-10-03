import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/Login/LoginPage';
import LoginSuccess from './components/Login/LoginSuccess';
import HeaderComponent from './components/HeaderComponent';

function App(props) {

  // const loginDetails = (uName, uPwd) => {
  //   props.navigation("/login-success");
  // }
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Routes>
            {/* <Route path="/" exact element={<HeaderComponent />}></Route> */}
            <Route path="/login-page" element={<LoginPage />}></Route>
            <Route path="/login-success" element={<LoginSuccess/>}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
