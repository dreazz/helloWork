import React, { Component } from 'react'
import axios from 'axios';


export default class Form extends Component {
  state={
    position:"",
    company:"",
    description:"",
    link:""
  }
 api  = axios.create({
        baseURL: "http://localhost:5000",
        withCredentials: true
      })
    

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state)
    const {position,company,description,link} = this.state
    axios.post("http://localhost:5000/job",{
      position:this.state.position,
      company:this.state.company,
      description:this.state.description,
      link:this.state.link
    })
    .then(data=>{
      console.log(data)
    })
    
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });
  render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label for="position">Position</label>
            <input type="text" name="position"  onChange={this.handleChange} />
          <label for="company">Company</label>
            <input type="text" name="company"  onChange={this.handleChange} />
          <label for="description">Description</label>
            <textarea type="text" name="description"  onChange={this.handleChange} />
          <label for="link">Link</label>
            <input type="text" name="link"  onChange={this.handleChange} />
-
            <button type="submit">Send</button>
        
        </form>
      );
  }
}
