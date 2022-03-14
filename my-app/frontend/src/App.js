import './App.css';
import axios from "axios"
import { useEffect } from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Home from "./pages/home";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;