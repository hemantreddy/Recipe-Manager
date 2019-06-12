import React, { Component } from 'react';



 class Join extends Component {
    constructor(props){
        super(props);

        this.state = {
            Join_firstname: '',
            Join_lastname: '',
            Join_email: '',
            Join_password: '',
            Join_confirmpassword: ''

        }
    }
    onChangeJoinFirstname = (e) => {
        this.setState({
            Join_firstname: e.target.value
        });
    }
    onChangeJoinLastname = (e) => {
        this.setState({
            Join_lastname: e.target.value
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
        console.log(`Join Firstname: ${this.state.Join_firstname}`);
        console.log(`Join Lastname: ${this.state.Join_lastname}`);
        console.log(`Join Email: ${this.state.Join_email}`);
        console.log(`Join Password: ${this.state.Join_password}`);
        console.log(`Join ConfirmPassword: ${this.state.Join_confirmpassword}`);
        
        this.setState({
            Join_firstname: '',
            Join_lastname: '',
            Join_email: '',
            Join_password: '',
            Join_confirmpassword: ''
        })
    }



    render() {
        return(
            <div> 
                <h3> Already have a Pepperplate account? <a href = "/Signin"> Sign in</a> </h3>
                <hr />
                <form onSubmit={this.onSubmit}>
                    <div className = "firstname">
                        <label> Firstname : </label>
                        <input  type="text" value={this.state.Join_firstname} onChange={this.onChangeJoinFirstname}/>
                    </div>
                    <div className = "lastname">
                    <label> Lastname : </label>
                        <input  type="text" value={this.state.Join_lastname} onChange={this.onChangeJoinLastname}/>
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