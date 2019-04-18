import React, { Component } from 'react';
import logo from './logo.svg';
import JobCard from './components/jobCard/JobCard'
import './App.css';

class App extends Component {
  state = {
    jobArray: [
      {name:"web developer",
       description:"this is an example of a job"   
    }]
  }
  render() {
    return (
      <div className="main">
        <div className="header">
          <h1>Say Hi, to your new job <span role="image">👋</span></h1>
        </div>
        <div class="body">
        {this.state.jobArray.map((job)=>{
          return <JobCard title={job.name} description={job.description}/>
        })}
         
        </div>
      </div>
    );
  }
}

export default App;
