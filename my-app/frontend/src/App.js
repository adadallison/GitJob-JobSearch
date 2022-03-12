import './App.css';
import axios from "axios"
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    axios.get("localhost:3000/posts").then((response) => {
      console.log(response);
    })
  }, []);

  return (
    <div className="App">Hello</div>
  );
}

export default App;