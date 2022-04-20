
import './App.css';
import Home from './components/Home'
import AddDrinkForm from './components/AddDrinkForm'
import DrinkDetails from './components/DrinkDetails'
import {useState, useEffect} from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
const API ="http://localhost:4000/drinks"


function App() {
const [drinksList, setDrinksList] = useState([])

  useEffect(() => {
    fetch(API)
    .then((res) => res.json())
    .then(setDrinksList)
  },[])

  return (
    <div className="App">
    <Switch>
      <Route path='/add drink form'>
        <AddDrinkForm/>
      </Route>
      <Route path='/drink details'>
        <DrinkDetails/>
      </Route>
      <Route exact path='/'>
        <Home
          drinks={drinksList}
        />
      </Route>
    </Switch>
    </div>
  );
}

export default App;
