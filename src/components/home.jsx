import React from "react";
import Search from "./search";
import { Link } from "react-router-dom";

function Card(props) {
        // const link="detials"+{props.numCode};

    return <div className="card {props.mode}">
         <Link to={props.numCode} >
        <img src={props.img} alt="" srcSet="" /></Link>
        <div className="info">
        <h4 className="wt-8" >{props.countryName}</h4>
          <div className="infoContent">  <span className="infoHead wt-6">Population:</span><p className="wt-3">{props.pop}</p> </div>
          <div className="infoContent"><span className="infoHead wt-6">Region:</span><p className="wt-3">{props.region}</p> </div>
          <div className="infoContent">   <span className="infoHead wt-6">Capital:</span><p className="wt-3">{props.capital}</p></div>
          
        </div>
    </div>
}


function makeCard(item){
   return <Card
   numCode = {item.numericCode}
    img={item.flags.png}
    countryName={item.name}
    pop={item.population}
    region={item.region}
    capital={item.capital}
    />
}
function Home(props) {
    let flagdata =  require('../data.json');
    
    const [data,setData] = React.useState(flagdata);
    
    let filteredData = data;
    function filterData(str,type){
        if(type =='search'){
            filteredData = flagdata.filter((item)=>{
                return item.name.toLowerCase().includes(str.toLowerCase(),0);
            })   
        }else if(type=='filter'){
            filteredData = flagdata.filter((item)=>{
                return item.region.toLowerCase().includes(str.toLowerCase(),0);
            })
        }else{
            filterData = flagdata;
        }
        setData(filteredData)
    }
    return <div id="home" style={props.style}>
        <Search
         filter ={filterData} 
         style={props.style}/>
        
        <div className="cards">

        {data.map(makeCard)}
        </div>
    </div>
}

export default Home;