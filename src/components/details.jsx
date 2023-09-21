import React from "react";
import Nav from "./nav";
import { useParams,useNavigate } from "react-router-dom";


function Details(props){
const {id} =useParams();
console.log(id)
let flagdata =  require('../data.json');
let item = flagdata.filter((flag)=>{
return flag.numericCode === id;

})

if(typeof item[0].borders === "undefined"){
    item[0].borders=[];
}
if(typeof item[0].languages === "undefined"){
    item[0].languages= [];
}
if(typeof item[0].currencies === "undefined"){
    item[0].currencies= [];
}

const navigate = useNavigate();

    return <div className="fullHeight" style={props.style}>

    <Nav 
    color={props.mode}
    style={props.style}
    toggle={props.toggleStyle} />

    <div style={props.style}>

    
    <div className="back" style={props.style} >
        <button className="back-btn" onClick={()=>navigate("/")} >Back</button>
    </div>

    <div className="detail-container"style={props.style}>
    <div className="detail-image"> <img src={item[0].flags.png} alt="" /></div>
    <div className="detail-content">
        <div>

        <h1>{item[0].name}</h1>
        <div className="content-info" style={props.style}>
           <div className="left-info">
            <span className="item"><span className="wt-8"> Native Name: </span> {item[0].nativeName}</span>
            <span className="item"><span className="wt-8"> Population: </span> {item[0].population}</span>
            <span className="item"><span className="wt-8"> Region: </span> {item[0].region}</span>
            <span className="item"><span className="wt-8"> Sub Region: </span> {item[0].subregion}</span>
            <span className="item"><span className="wt-8"> Capital: </span> {item[0].capital}</span>
            </div>     
           <div className="right-info">
           <span className="item"><span className="wt-8">Top Level Domian:</span> {item[0].topLevelDomain}</span>
           <span className="item"><span className="wt-8">Currencies:</span> {item[0].currencies.map((curr)=>{
                            return <span>{curr.name} </span>
           })}</span>
           <span className="item"><span className="wt-8"> Languages: </span> {item[0].languages.map((lang)=>{
            return <span>{lang.name} </span>
           })}</span>
           </div>
        </div>
        </div>

        <div className="detail-border">
            <span className="item"> <span className="wt-8"> Border Countries: </span> {item[0].borders.map(border=>{
                return <span className="borders" >{border}</span>
            })}</span>
        </div>

    </div>
    </div>

    </div>
    </div>

    

    
}


export default Details;