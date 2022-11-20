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
import Profile from "./pages/user/Profile";
import UserJobView from "./pages/user/UserJobView";
import "pure-react-carousel/dist/react-carousel.es.css";
import UserContracts from "./pages/user/UserContracts";
function App() {
  return (
    <>
      <ToastContainer />
      <Router>
      <Header />
        <Container style={{minHeight:'500px'}}>
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
              <Route path=':id' element={<Profile/>} />
              <Route path="jobs" element={<UserJobs/>} />
              <Route path="contracts" element={<UserContracts/>} />
              <Route path="jobs/:jobId" element={<UserJobView/>} />
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