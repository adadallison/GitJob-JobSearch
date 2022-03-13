import './App.css';
import axios from "axios"
import { useEffect } from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Home from "./pages/home";
import Layout from "./components/Layout";

const App = () => {
  // useEffect(() => {
  //   axios.get("localhost:3000/posts").then((response) => {
  //     console.log(response);
  //   })
  // }, []);

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