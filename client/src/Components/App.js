import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import CreateTodo from './todo-create';
import Home from './Home/Home';



class App extends Component {
  render() {
    return (
      <Router>
       <div className = "container">

      
       <Route path = "/" exact component = {Home} />
       </div>

       </Router>
        
    );
  }
}

export default App;
