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
import FiveGs from './pages/Careers/FiveG';
import Form4resume from './components/Form4resume';
import Resume from './pages/Resume';

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
          <Route path="/FiveGs" element={<FiveGs/>}/>
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