import './App.css';
import axios from "axios"

function App() {
  useEffect(() => {
    axios.get("localhost:3001/posts").then((response) => {
      console.log(response);
    })
  }, []);
  
  return (
    <div className="App"></div>
  );
}

export default App;