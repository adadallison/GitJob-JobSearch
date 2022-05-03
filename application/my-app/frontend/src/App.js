import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import Login from "./pages/Login";
import Register from "./pages/Register";
import Careers from './pages/Careers';
import AI from './pages/Careers/AI';
import JobPosting from './pages/JobPosting';
import Profile from "./pages/Profile";
import Qc from './pages/Careers/Qc';
import Ec from './pages/Careers/Ec';
import Form from './components/Form';
import Rp from './pages/Careers/Rp';
import Form4resume from './components/Form4resume';
import Resume from './pages/Resume';
import It from './pages/Careers/It';

import Va from './pages/Careers/Va';
import Bc from './pages/Careers/Bc';
import Cs from './pages/Careers/Cs';
import G from './pages/Careers/G';
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/careers" element={<Careers/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/AI" element={<AI/>}/>
          <Route path="/Qc" element={<Qc/>}/>
          <Route path="/Ec" element={<Ec/>}/>
          <Route path= "/Rp" element={<Rp/>}/>
          <Route path= "/It" element={<It/>}/>
          <Route path= "/G" element={<G/>}/>
          <Route path= "/Va" element={<Va/>}/>
          <Route path= "/Bc" element={<Bc/>}/>
          <Route path= "/Cs" element={<Cs/>}/>
          <Route path="/JobPosting" element={<JobPosting/>}/>
          <Route path="/JobPosting2" element={<Form/>}/>
          <Route path="/Resume" element={<Resume/>}/>
          <Route path="/JobPosting3" element={<Form4resume/>}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;