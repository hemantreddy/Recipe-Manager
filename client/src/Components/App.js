import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";

import UploadRecipe from './UploadRecipe'
import DisplayRecipe from './DisplayRecipe'

class App extends Component {
  render() {
    return (
     <Router>
        <div className="container">
          <Link to="/display"> DisplayRecipe </Link>
          <Link to="/upload">UploadRecipe</Link> 
          <Route path="/upload" component= {UploadRecipe}/>
          <Route path="/display" component= {DisplayRecipe}/>
        </div>
     </Router>
    );
  }
}

export default App;
