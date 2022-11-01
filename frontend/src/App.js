import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {React} from 'react';
import { Container} from "semantic-ui-react";
import {ToastContainer} from 'react-toastify';
import Dashboard from './pages/user/Dashboard';
import Index from './pages/Index';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Header from './components/includes/Header';
import NotFound from './pages/NotFound';
import Job from './pages/job/Job';
import JobList from './pages/job/JobList';
import PostJob from "./pages/job/PostJob";
import UserJobs from "./pages/user/UserJobs";
import 'react-toastify/dist/ReactToastify.css'
import Messenger from "./pages/messenger/Messenger";
import Footer from "./components/includes/Footer";

function App() {
  return (
    <>
      <ToastContainer />
      <Router>
      <Header />
        <Container style={{height:'100vh%'}}>
          <Routes>
            <Route path="/" element={<Index/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/chat" element={<Messenger/>} />
            <Route path="/jobs">
              <Route index element={<JobList/>} />
              <Route path=":id" element={<Job/>} />
              <Route path="post" element={<PostJob/>} />
            </Route>
            <Route path="/user">
              <Route path="jobs" element={<UserJobs/>} />
            </Route>
            <Route path="*" element={<NotFound/>} />
          </Routes>
        </Container>
        <Footer />
      </Router>
    </>
  );
}

export default App;