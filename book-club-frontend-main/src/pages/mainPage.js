
import React from "react";
import NestedGrid from "../components/bookDisplay/bookTable";
import './mainPage.css';
// https://vinitshahdeo.github.io/inspirational-quotes/
const Quote = require('inspirational-quotes');

function MainPage(props) {
    return (
      <div className="App">
        <p style={{textAlign: "center", paddingTop: "25px", fontSize: "26px", color: "white", fontFamily: "serif", fontStyle: "italic", fontWeight: "bold"}}>{Quote.getQuote().text}</p>
        <p style={{textAlign: "center", paddingTop: "12px", color: "white", fontFamily: "serif"}}> - {Quote.getQuote().author}</p>
        <NestedGrid data = {props.data} function = {props.function}/>        
      </div>
    );
  }
  
  export default MainPage;