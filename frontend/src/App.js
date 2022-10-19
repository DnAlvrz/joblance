import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {React} from 'react';
import {useSelector} from 'react-redux';
import { Container, Grid} from "semantic-ui-react";
import {ToastContainer} from 'react-toastify';
import SideNav from "./components/SideNav";
import Dashboard from './pages/user/Dashboard';
import Index from './pages/Index';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Header from './components/Header';
import NotFound from './pages/NotFound';
import Job from './pages/job/Job';
import JobList from './pages/job/JobList';
import PostJob from "./pages/job/PostJob";
import UserJobs from "./pages/user/UserJobs";
import 'react-toastify/dist/ReactToastify.css'
import Messenger from "./pages/messenger/Messenger";

function App() {
  const {user} = useSelector((state)=> state.auth);
  return (
    <>
      <ToastContainer />
      <Router>
      <Header />
        { user ? (
          <Container >
          <Grid >
            <Grid.Row centered>
              <Grid.Column width={3} only='large screen'>
                <SideNav />
              </Grid.Column>
              <Grid.Column width={13}>
                <Routes>
                  <Route path="/" element={<Index/>} />
                  <Route path="/dashboard" element={<Dashboard/>} />
                  <Route path="/chat" element={<Messenger/>} />
                  <Route path="/jobs">
                    <Route index element={<JobList/>} />
                    <Route path=":id" element={<Job/>} />
                    <Route path="post" element={<PostJob/>} />
                    <Route path="user" element={<UserJobs/>} />
                  </Route>
                  <Route path="*" element={<NotFound/>} />
                </Routes>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          </Container>
        )
          : (
            <Container >
              <Routes>
                <Route path="/" element={<Index/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="*" element={<NotFound/>} />
              </Routes>
            </Container>
        )}
      </Router>

    </>
  );
}

export default App;