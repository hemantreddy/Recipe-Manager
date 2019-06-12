import React from 'react'

export default class Display extends React.Component{
    
    render(){

        return(
            <div>
                <ul>
                <li>
                <label><h2>Title</h2></label>
                
                </li>
                <li>
                <label><h3>Description</h3></label>
                </li>
                <li>
                <label><h3>Ingredients</h3></label>
                </li>
                <li>
                <label><h3>Instructions</h3></label>
                </li>
                </ul>
            </div>
        )
    }
}