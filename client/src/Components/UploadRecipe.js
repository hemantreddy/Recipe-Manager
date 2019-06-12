import React from 'react';
import './UploadRecipe.css';

export default class UploadRecipe extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title : '',
            description: '',
            ingridients : '',
            instructions : ''
        }
    }
    
    OnTitle = (e) => {
        this.setState({
            title : e.target.value
        })
    }
    OnDescription = (e) => {
        this.setState({
            description: e.target.value
        })
    }
    OnIngridients = (e) => {
        this.setState({
            ingridients: e.target.value
        })
    }
    OnInstructions = (e) => {
        this.setState({
            instructions: e.target.value
        })
    }

    onSubmit = (e) => {
       e.preventDefault();

        console.log(`Title : ${this.state.title}`);
        console.log(`Descriptipn : ${this.state.description}`);
        console.log(`Ingridients : ${this.state.ingridients}`);
        console.log(`Instructions : ${this.state.instructions}`);
        console.log("Recipe Uploaded");

        const newRecipe = {
            title: this.state.title,
            description: this.state.description,
            ingridients: this.state.ingridients,
            instructions: this.state.instructions
        }
                
        this.setState({
            title: '',
            description: '',
            ingridients: '',
            instructions: ''
        })
    }
    render(){
        return(
            <div className= "main">
            <h2>RECIPE TITLE</h2>
            <form onSubmit = {this.onSubmit}>
                <ul>
                    <li>
                    <label>TITLE :</label>
                    <input type="text" value = {this.state.title} onChange= {this.OnTitle}/>
                    </li>
                    <li>
                    <label>DESCRIPTION :</label>
                    <input className="desc" type="text" value = {this.state.description} onChange={this.OnDescription}/>
                    </li>
                    <li>
                    <label>INGREDIENTS :</label>
                    <input type="text" value= {this.state.ingridients} onChange = {this.OnIngridients}/>
                    </li>
                    <li>
                    <label>INSTRUCTIONS :</label>
                    <input type="text" value = {this.state.instructions} onChange = {this.OnInstructions}/>
                    </li>
                    
                    <li>
                    <input type ="submit" value="Upload Recipe" />
                    </li>
                </ul>    
                </form>
            </div>
        
        )
    }
}