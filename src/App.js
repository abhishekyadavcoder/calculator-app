import React, {useState} from "react";
import Header from "./Components/Header/Header";

import moonIcon from "./assets/moon.png";
import sunIcon from "./assets/sun.png";
import "./App.css";

import KeyPad from "./Components/KeyPad/KeyPad";


function App() {
const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <div className="app">
    <div className ="app_calculator">

    <div className ="app_calculator_navbar">
    <Header/>
    <KeyPad/>
    <div className = "app_calculator_navbar_toggle"
    onClick ={()=>setIsDarkMode(!isDarkMode)} >
    <div className = {`app_calculator_navbar_toggle_circle ${isDarkMode ? "app_calculator_navbar_toggle_circle_active" : ""}`} 
    />
    </div>
    <img src={isDarkMode ? moonIcon : sunIcon} alt="mode"/>
    </div>  
    </div>
    </div>          
    
  );

}

export default App;
