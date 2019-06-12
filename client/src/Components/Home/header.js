import React, { Component } from 'react';
import '../Home/Home.css';
import logo from '../../Assets/Images/logo_center.jpg';
import twitter from '../../Assets/Images/icn_tw_off.png';
import facebook from '../../Assets/Images/IMG_5876 copy 3.png';
import recipes from '../../Assets/Images/recipes.png';
import menus from '../../Assets/Images/menus.png';
import planner from '../../Assets/Images/planner.png';
import shopping from '../../Assets/Images/shopping.png';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


export default class Header extends Component {
    render(){
        return(

        <div className = "Header">
                
<img hspace = "10px" src = {twitter} alt = {"twitter"} />
<img  hspace = "10px" src = {facebook} alt = {"facebook"}  />
<img hspace = "250px" src = {logo} alt = {"logo"} /> 
<div className = "btn">
<Link to="/Join"> Join </Link>
<Link  to="/Signin"> Signin </Link>
</div>
</div>
        )

    }
}

