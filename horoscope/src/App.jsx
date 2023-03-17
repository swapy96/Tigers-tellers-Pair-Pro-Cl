import axios from 'axios'
import { useState } from "react";
import "./App.scss";
import Home from "./pages/Home";

const URL = "http://localhost:9898";

function App() {
  const [result, setResult] = useState(null)

  const handleSubmit = (event) => {
   let day = event.target.day.value
   let sign = event.target.sign.value
    event.preventDefault();
    axios
      .get(`${URL}?sign=${sign}&day=${day}`)
      .then((res) => {
        setResult(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <h1>Horoscope</h1>
      <Home handleSubmit={handleSubmit} result={result}/>
    </div>
  );
}

export default App;
