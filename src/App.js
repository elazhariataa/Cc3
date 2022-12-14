import './App.css';
import {  Router } from "react-router-dom";
import Acceuil from "./Component/Acceuil";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUsers } from "./redux/UserSlice";
import { getCarts } from "./redux/CartSlice";


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
    dispatch(getCarts());
  });
  return (
    <div className="App">
   
      <Router>
        <div>
          <Acceuil />
        </div>
      </Router>
    
    </div>
  );
}

export default App;
