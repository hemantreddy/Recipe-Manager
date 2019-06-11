import React, { Component } from 'react';
import '../Home/Home.css';
import logo from '../logo_center.jpg';
import twitter from '../icn_tw_off.png';
import facebook from '../IMG_5876 copy 3.png';
import recipes from '../recipes.png';
import menus from '../menus.png';
import planner from '../planner.png';
import shopping from '../shopping.png';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

export default class Home extends Component {
    render() {
        // const twitterClick = () => {
        //     console.log('twitterClick');
        // }
        // const facebookClick = () => {
        //     console.log('facebookClick');
        // }
        // const homeClick = () => {
        //     console.log('HomepageClick');

        // }

        // const joinClick = () => {
        //     console.log('JoinClick');
        // }

        // const signinClick = () => {
        //     console.log('SignInClick');
        // }
        return(
            <div> 
                <div className = "Header">
                
                <Link to = "www.google.com"><img hspace = "10px" src = {twitter} alt = {"twitter"} /></Link>
                <img  hspace = "10px" src = {facebook} alt = {"facebook"}  />
                <img hspace = "250px" src = {logo} alt = {"logo"} /> 
   
 

               

                <button  > JOIN </button>
                <button  > SIGN IN </button>
                </div>

                <p> Finally, some help in the kitchen. </p>

                <div className = "wrapper">
                <div className = "feature">

                <img hspace = "40px" src = {recipes} alt = {"recipes"}/>
                <ul>
                <li> Eliminate stacks of books and piles of paper in the kitchen. </li>
                <li> Create and edit your own recipes or import from popular recipe sites by pasting a URL. </li>
                <li>Create unlimited categories to organize your recipe library.</li>
                </ul>
                </div>
                <div className = "feature">
                <img hspace = "40px" src = {menus} alt = {"menus"}/>
                 <li>Plan menus for special events or regular meals. </li>
                 <li>Take your device into the kitchen and cook your menu with multiple cooking timers. </li>
                <li> Cook Mode prevents screen from dimming on your device.</li>
                </div>
                <div className = "feature">
                <img hspace = "40px" src = {planner} alt = {"planner"}/>
                <li> Organize your week by adding recipes to the schedule. </li>
                <li> Share your favorite recipes with friends and family via Email, Facebook and Twitter.</li>
                <li> Scale recipes to make the right amount.</li>
                </div>
                <div className = "feature">
                <img hspace = "40px" src = {shopping} alt = {"shopping"}/>
               <li>Add recipes, menus and other items to your shopping list. </li>
               <li>Automatically arrange your shopping list the way you shop in the store. </li>
                <li> Carry your shopping list with you and add to it in store.</li>
                </div>

                </div>

               
            </div>
        )
    }
}