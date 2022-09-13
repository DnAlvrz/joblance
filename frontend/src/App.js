import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from 'react';
import Dashboard from './pages/Dashboard';
import Index from './pages/Index';
import Login from './pages/Login';
import Register from './pages/Register';
import Header from './components/Header';
import NotFound from './pages/NotFound';
import Job from './pages/Job';
import JobList from './pages/JobList';
import Sidebar from './components/Sidebar';
import { Container } from "semantic-ui-react";
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
   
      <ToastContainer /> 
      <Router>
        <Header />
        {/*<Sidebar/> */}
        <Container >
          <Routes>
            <Route path="/" element={<Index/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/jobs">
              <Route index element={<JobList/>} />
              <Route path=":id" element={<Job/>} />
            </Route>
            <Route path="*" element={<NotFound/>} />
          </Routes>
        </Container>
      </Router>

    </>
  );
}

export default App;
