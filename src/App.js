import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/Login/LoginPage';
import LoginSuccess from './components/Login/LoginSuccess';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/Employee/ListEmployeeComponent';
import CreateEmployeeComponent from './components/Employee/CreateEmployeeComponent';
import ViewEmployeeComponent from './components/Employee/ViewEmployeeComponent';

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
            <Route path = "/list-employees" exact element = {<ListEmployeeComponent />}></Route>
            <Route path = "/employees" element = {<ListEmployeeComponent />}></Route>
            <Route path = "/add-employee/:id" element = {<CreateEmployeeComponent />}></Route>
            <Route path = "/view-employee/:id" element = {<ViewEmployeeComponent />}></Route>
            <Route path="/login-page" element={<LoginPage />}></Route>
            <Route path="/login-success" element={<LoginSuccess/>}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
