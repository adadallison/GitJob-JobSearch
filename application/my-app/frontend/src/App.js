import './App.css';
import axios from "axios"
import { useEffect } from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Home from "./pages/home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NavBar from './components/Navbar';
import Careers from './pages/Careers';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/careers" element={<Careers/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;