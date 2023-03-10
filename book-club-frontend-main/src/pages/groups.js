import React from 'react';
// import './groups.css';
// import GroupDataService from '../services/groups.js'
import './topBooks.css'
import Figures from '../components/figures';
import Fiction from './groupPhotos/fiction2.jpg'
import Poetry from './groupPhotos/poetry.jpg'
import Thinkers from './groupPhotos/thinkers.jpg'
import Young from './groupPhotos/young.jpg'

function Groups(props) {

  const introInfo = () => {
    let message = "Hello and welcome to the groups page!"
    let message2 = "Please use this page to find group and meet others with common interests."
    return (
      <div>
        <p style={{textAlign: "center", paddingTop: "25px", fontSize: "26px", color: "white", fontFamily: "serif", fontWeight: "bold"}}>{message}</p>
        <p style={{textAlign: "center", paddingTop: "0px", fontSize: "26px", color: "white", fontFamily: "serif", fontWeight: "bold"}}>{message2}</p>
      </div>
    )
  }
    return (
      <div>
        {introInfo()}

       
        <div class="grid-container">
        <div  class="grid-item"><Figures image={Thinkers}  title={"The Thinkers"} button={"true"} id = {1}/></div>
        <div class="grid-item"><Figures image={Poetry} title={"Poetry Slammers"} button={"true"} id = {2}/></div>
        <div class="grid-item"><Figures image={Fiction} title={"Fiction Fiends"} button={"true"} id = {3}/></div>
        <div class="grid-item"><Figures image={Young} title={"Mrs. Karen's 4th grade class"} button={"true"} id = {4}/></div>
        
      </div>
        
      </div>
    );
  }
  
  export default Groups;