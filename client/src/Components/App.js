import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import CreateTodo from './todo-create';
import Home from './Home/Home';
import Join from './Join/Join';
import Signin from './Signin/Signin';
import Header from './Home/header';

import UploadRecipe from './UploadRecipe'
import DisplayRecipe from './DisplayRecipe'

class App extends Component {
  render() {
    return (
     <Router>
        <div className="container">
          <Header />
          <Route path="/upload" render= {(props) => {
            return false ? <UploadRecipe /> : 
            <Redirect
              to="/signin" 
            />
          }}/>
          <Route path="/display" component= {DisplayRecipe}/>
          <Route exact path = "/" component = {Home} />
          {/* <Route path = "/Header" component = {Header}/> */}
          <Route path = "/Join" component = {Join} />
          <Route  path = "/Signin" component = {Signin} />
        </div>
     </Router>
    );
  }
}

export default App;
