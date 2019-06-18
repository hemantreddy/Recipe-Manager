import React, { Component } from 'react';
import axios from 'axios';


class Signin extends Component {
    constructor(props){
        super(props);

        this.state = {
            Signin_Emailaddress: '',
            Signin_password: '',

        }
    }
    onChangeSigninEmailaddress = (e) => {
        this.setState({
            Signin_Emailaddress: e.target.value
        });
    }
    onChangeSigninpassword = (e) => {
        this.setState({
            Signin_password: e.target.value

        });
    }
        onSubmit = (e) => {
            e.preventDefault();
            
            console.log(`Form submitted:`);
            console.log(`Signin Emailaddress: ${this.state.Signin_Emailaddress}`);

            const newSignin = {
                email: this.state.Signin_Emailaddress,
                password: this.state.Signin_password
            };

            axios.post('http://localhost:4000/user/login', newSignin)
            .then(res => {
                localStorage.setItem('token', res.data.token)
                console.log(res.data)});


            this.setState({
                Signin_Emailaddress: '',
                Signin_password: '',
        })
    }
    
    render() {
        return (
            <div>
                <h3> Don't have a Pepperplate account? <a href = "/Join">Join for free </a>  </h3>
                <hr/>
                <form onSubmit={this.onSubmit}>
                    <div className = "Emailaddress">
                        <label> Email Address : </label>
                        <input  type="text" value={this.state.Signin_Emailaddress} onChange={this.onChangeSigninEmailaddress}/>
                    </div>
                    <div className = "Password">
                    <label> Password : </label>
                        <input  type="text" value={this.state.Signin_password} onChange={this.onChangeSigninpassword}/>
                    </div>
                    <div className = "button">
                        <input type = "submit" value = "Submit" className = "btn-primary"/>
                    </div>
                    </form>
            </div>
        )
    }
}

export default Signin;