import React from "react";
import { BsMoon } from "react-icons/bs";

// function toggleClass(){
//     document.querySelector("nav").classList.toggle("DarkNav");
//     document.querySelector("select").classList.toggle("DarkNav");
//     document.querySelector(".searchIcon").classList.toggle("DarkNav");
//     document.querySelector('input[name="search"]').classList.toggle("DarkNav");
//     document.querySelector(".right button").classList.toggle("DarkNav");
//     document.querySelectorAll(".card").forEach((card)=>{
//         card.classList.toggle("DarkNav")
//     })
//     document.querySelector("body").classList.toggle("DarkHome");
// }

function Nav(props){

return <nav style={props.style}>
    <h1 className="wt-8"  >Where in the world?</h1>
    <div className="right">
        <BsMoon />
        <button className="wt-6" onClick={props.toggle} style={props.style} >{props.color} Mode</button>
    </div>
</nav>
}

export default Nav;