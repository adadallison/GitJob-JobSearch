import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import Login from "./pages/Login";
import Register from "./pages/Register";
import Careers from './pages/Careers';
import AI from './pages/Careers/AI';
import Jobs from './pages/Jobs';
import JobPosting from './pages/JobPosting';
import User from "./pages/User";
import Forum from './pages/Forum';
import ForumPost from './pages/ForumPost';
import Qc from './pages/Careers/Qc';
import Ec from './pages/Careers/Ec';
import Form from './components/Form';
import Results from './pages/Results';
import FiveGs from './pages/Careers/FiveG';

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
          <Route path="/Qc" element={<Qc/>}/>
          <Route path="/Ec" element={<Ec/>}/>
          <Route path="/FiveGs" element={<FiveGs/>}/>
          <Route path="/jobs" element={<Jobs/>}/>
          <Route path="/JobPosting" element={<JobPosting/>}/>
          <Route path="/JobPosting2" element={<Form/>}/>
          <Route path="/results" element={<Results/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;