import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";

import TodoList from './todo-list'
import EditTodo from './todo-edit'
import CreateTodo from './todo-create'


class App extends Component {
  render() {
    return (
     <Router>
        <div className="container">
          <nav className="navbar navbar-expand-xl navbar-light bg-light">
            <Link to="/" className="navbar-brand">Todo App</Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Todo</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Todo</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <Route exact path="/" component={TodoList} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/create" component={CreateTodo} />
        </div>
     </Router>
    );
  }
}

export default App;
