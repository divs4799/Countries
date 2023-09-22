import React from "react";
import { BsSearch } from "react-icons/bs";

function Search(props){
    function handleChange(event){
        const {value,name} = event.target;
        console.log(event.target.name)
        props.filter(value,name);
    }
    
    return <div className="searchDiv">
        <div className="leftDiv" >
        <div className="searchIcon" ><BsSearch/></div>
        <input name="search" className="wt-3" style={props.style}  onChange={handleChange} type="text" placeholder="Search a country..." />
        </div>
        <select style={props.style} className="wt-6" onChange={handleChange}  name="filter" id="">
            <option value="" selected >Filter By Region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
        </select>

    </div>

}
export default Search;