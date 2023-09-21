import React from "react";
import Nav from './nav';
import Home from './home';

function Main(props){
    
    return (<div>
        <Nav 
        color={props.mode}
        style={props.style}
        toggle={props.toggleStyle} />
        <Home 
        style={props.style}/>
    </div>)
}

export default Main;