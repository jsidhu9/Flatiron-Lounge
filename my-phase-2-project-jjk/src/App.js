
import './App.css';
import Home from './components/Home'
import {useState, useEffect} from "react";

const API ="http://localhost:4000/drinks"


function App() {
const [drinksList, setDrinksList] = useState([])

  useEffect(() => {
    fetch(API)
    .then((res) => res.json())
    .then(setDrinksList)
  },[])
console.log(drinksList)

  return (
    <div className="App">
    <Home
      drinks={drinksList}
    />
    </div>
  );
}

export default App;
