import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';



 class Join extends Component {
    constructor(props){
        super(props);

        this.state = {
            Join_name: '',
            Join_email: '',
            Join_password: '',
            Join_confirmpassword: '',
            isLoggedIn: false,

        }
    }
    onChangeJoinname = (e) => {
        this.setState({
            Join_name: e.target.value
        });
    }
    onChangeJoinEmail = (e) => {
        this.setState({
            Join_email: e.target.value
        });
    }
    onChangeJoinPassword = (e) => {
        this.setState({
            Join_password: e.target.value
        });
    }
    onChangeJoinConfirmPassword = (e) => {
        this.setState({
            Join_confirmpassword: e.target.value
        });
    }
    onSubmit = (e) => {
        e.preventDefault();
        
        console.log(`Form submitted:`);
        console.log(` name: ${this.state.Join_name}`);
        console.log(` Email: ${this.state.Join_email}`);
        console.log(` Password: ${this.state.Join_password}`);
        console.log(` ConfirmPassword: ${this.state.Join_confirmpassword}`);

        const newJoin = {
            name: this.state.Join_name,
            email: this.state.Join_email,
            password: this.state.Join_password

        };

        axios.post('http://localhost:4000/user/signup', newJoin)
        .then(res => {
            console.log(res.data)
            this.setState({
                isLoggedIn: true,
                Join_name: '',
                Join_email: '',
                Join_password: '',
                Join_confirmpassword: ''
            })
        });
        
    }



    render() {
        if(this.state.isLoggedIn) {
            return <Redirect to='/signin' />
        }
        return(
            <div> 
                <h3> Already have a Pepperplate account? <a href = "/Signin"> Sign in</a> </h3>
                <hr />
                <form onSubmit={this.onSubmit}>
                    <div className = "name">
                        <label> name : </label>
                        <input  type="text" value={this.state.Join_name} onChange={this.onChangeJoinname}/>
                    </div>
                    <div className = "email">
                    <label> Email : </label>
                        <input  type="text" value={this.state.Join_email} onChange={this.onChangeJoinEmail}/>
                    </div>
                    <div className = "password">
                    <label> Password : </label>
                        <input  type="password" value={this.state.Join_password} onChange={this.onChangeJoinPassword}/>
                    </div>
                    <div className = "confirmpassword">
                    <label>  Confirm Password : </label>
                        <input  type="password" value={this.state.Join_confirmpassword} onChange={this.onChangeJoinConfirmPassword}/>
                    </div>
                    <div className = "button">
                        <input type = "submit" value = "Submit" className = "btn-primary"/>
                    </div>
                    </form>


            </div>
        )
    }
}

export default Join;