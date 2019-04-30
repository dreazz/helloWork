import React, { Component } from 'react';
import { Link,Route,Switch,BrowserRouter } from 'react-router-dom'
import jobPost from './pages/jobPost'
import home from './pages/home'


import './App.css';

class App extends Component {
 
render() {
  
    return (
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={home}/>
        <Route exact path="/jobPost" component={jobPost} />
      </Switch>
      </BrowserRouter>
     
    );
  }
}

export default App;
