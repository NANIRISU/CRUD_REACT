import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Curd from './Curd';


import 'bootstrap/dist/css/bootstrap.min.css'
import { GlobalProvider} from './context/GlobalState';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import { Home } from './components/Home';
import { UserList } from './components/UserList';
import Register from './components/Register';
import Todo from './components/Todo';
import  Input  from './components/Input';

function App() {
  return (
    <div style={{maxWidth:"30rem", margin:"4rem auto"}}>
      <Router>
        <Switch>
          <Route exact path="/" ><Register /> </Route>  
          <Route path="/add"><Input/> </Route>
        </Switch>
      </Router>

   
    </div>
  );
}

export default App;
