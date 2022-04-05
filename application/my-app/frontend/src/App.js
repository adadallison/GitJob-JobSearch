import './App.css';
import axios from "axios"
import { useEffect } from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Home from './pages/home';
import Login from "./pages/Login";
import Register from "./pages/Register";
import NavBar from './components/Navbar';
import Careers from './pages/Careers';
import AI from './pages/AI';
import FiveG from './pages/FiveG';
import Jobs from './pages/Jobs';
import JobPosting from './pages/JobPosting';
import User from "./pages/User";
import Forum from './pages/Forum';
import ForumPost from './pages/ForumPost';
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/careers" element={<Careers/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/user" element={<User/>}/>
          <Route path="/forum" element={<Forum/>}/>
          <Route path="/ForumPost" element={<ForumPost/>}/>
          <Route path="/AI" element={<AI/>}/>
          <Route path="/FiveG" element={<FiveG/>}/>
          <Route path="/jobs" element={<Jobs/>}/>
          <Route path="/JobPosting" element={<JobPosting/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;