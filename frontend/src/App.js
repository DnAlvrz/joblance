import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {React} from 'react';
import {useSelector} from 'react-redux'
import Dashboard from './pages/Dashboard';
import Index from './pages/Index';
import Login from './pages/Login';
import Register from './pages/Register';
import Header from './components/Header';
import NotFound from './pages/NotFound';
import Job from './pages/Job';
import JobList from './pages/JobList';
import { Container, Grid} from "semantic-ui-react";
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import SideNav from "./components/SideNav";
import PostJob from "./pages/PostJob";

function App() {
  const {user} = useSelector((state)=> state.auth);
  return (
    <>
      <ToastContainer /> 
      <Router>
      <Header />
        { user ? ( 
          <Container >
          <Grid stackable >
            <Grid.Row>
              <Grid.Column width={3}>
                <SideNav />
              </Grid.Column>
              <Grid.Column width={13}>
                <Routes>
                  <Route path="/" element={<Index/>} />
                  <Route path="/dashboard" element={<Dashboard/>} />
                  <Route path="/login" element={<Login/>} />
                  <Route path="/register" element={<Register/>} />
                  <Route path="/jobs">
                    <Route index element={<JobList/>} />
                    <Route path=":id" element={<Job/>} />
                    <Route path="post" element={<PostJob/>} />
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
                <Route path="/dashboard" element={<Dashboard/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/jobs">
                  <Route index element={<JobList/>} />
                  <Route path=":id" element={<Job/>} />
                  <Route path="post" element={<PostJob/>} />
                </Route>
                <Route path="*" element={<NotFound/>} />
              </Routes>
            </Container>
        )}
      </Router>

    </>
  );
}

export default App;