import React, { Component } from 'react';
import logo from './logo.svg';
import JobCard from './components/jobCard/JobCard';
import jobData from './jobsApril.json' ;
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="main">
        <div className="header">
          <h1>Say Hi, to your new job <span role="image">👋</span></h1>
        </div>
        <div className="body">
        {jobData.map((job,i)=>{
          return <JobCard key={job.Company + `${i}`}position={job.Position} company={job.Company} status={job.Status} date={job.Date} link={job.LinkUrl}/>
        })}
         
        </div>
      </div>
    );
  }
}

export default App;
