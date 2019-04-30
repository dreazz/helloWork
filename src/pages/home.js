import React, { Component } from 'react'
import JobCard from './../components/jobCard/JobCard';
import jobDataDev from './../jobsApril.json' ;
import jobDataUx from './../uxuiJobsApril.json';
import SearchBar from './../components/searchBar/SearchBar';

export default class home extends Component {
  state = {
    devJobsArray:jobDataDev,
    uxJobsArray:jobDataUx,
    searchArr:[],
    jobType:'dev',
    search:false,
    searchResult:false,
  }
  handleClickDev = () => {
      this.setState({
        jobType:'dev',
      })
    
  }
  handleClickUx = () => {
    this.setState({
      jobType:'ux',
    })
}
handleChange = (e) => { 
  if(e.target.value.length > 0){
    this.setState({
      searchResult:true
    })
  }else{
    this.setState({
      searchResult:false
    })
  }
  let newSearch = []
  if(this.state.jobType === 'dev'){
    newSearch = this.state.devJobsArray.filter((job) => {   
      return job.Position.toLowerCase().includes(e.target.value.toLowerCase())
    })

}else{
  newSearch = this.state.uxJobsArray.filter((job) => {
    return job.Position.toLowerCase().includes(e.target.value.toLowerCase())
  })
}
   this.setState({
        searchArr:newSearch
      })
     
}
  render() {
    return (
      <div className="main">
     
        <div className="header">
          <h1>Say hi to your new job <span role="image">👋</span></h1>
          <SearchBar onChange={this.handleChange}/>
            <div className="filter-container">
              <button className="filter-btn" onClick={this.handleClickDev}>Dev</button>
              <button className="filter-btn" onClick={this.handleClickUx}>UX/UI</button>
            </div>
          
          </div>
          {this.state.searchResult? 
           <div className="body search">
            {this.state.searchArr.map((job,i)=>{
             return <JobCard key={job.Company + `${i}`}position={job.Position} company={job.Company} status={job.Status} date={job.Date} link={job.LinkUrl}/>
              }) }
            </div>
            :
                
             <div className="body">
              {this.state.jobType === 'dev'?
                this.state.devJobsArray.map((job,i)=>{
                  return <JobCard key={job.Company + `${i}`}position={job.Position} company={job.Company} status={job.Status} date={job.Date} link={job.LinkUrl}/>
                }) 
              :
              this.state.uxJobsArray.map((job,i)=>{
                return <JobCard key={job.Company + `${i}`}position={job.Position} company={job.Company} status={job.Status} date={job.Date} link={job.LinkUrl}/>
                })
              }
          </div>
          
          }
      </div>
    )
  }
}
