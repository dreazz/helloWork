import React, { Component } from 'react';
import logo from './logo.svg';
import JobCard from './components/jobCard/JobCard';
import jobDataDev from './jobsApril.json' ;
import jobDataUx from './uxuiJobsApril.json';

import './App.css';

class App extends Component {
  state = {
    jobType:'dev'
  }
  handleClickDev = () => {
      this.setState({
        jobType:'dev'
      })
  }
  handleClickUx = () => {
    this.setState({
      jobType:'ux'
    })
}
  render() {
    return (
      <div className="main">
        <div className="header">
          <h1>Say Hi, to your new job <span role="image">👋</span></h1>
            <div className="filter-container">
              <button className="filter-btn" onClick={this.handleClickDev}>I'am a Dev</button>
              <button className="filter-btn" onClick={this.handleClickUx}>I'am a Ux/Ui</button>
            </div>
          </div>
        <div className="body">
        {this.state.jobType === 'dev'?
          jobDataDev.map((job,i)=>{
          return <JobCard key={job.Company + `${i}`}position={job.Position} company={job.Company} status={job.Status} date={job.Date} link={job.LinkUrl}/>
        }) 
          :
          jobDataUx.map((job,i)=>{
            return <JobCard key={job.Company + `${i}`}position={job.Position} company={job.Company} status={job.Status} date={job.Date} link={job.LinkUrl}/>
          })
        }
        </div>
      </div>
    );
  }
}

export default App;
