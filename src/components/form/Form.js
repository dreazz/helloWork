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
        baseURL: "https://hellow-work-api.herokuapp.com",
        withCredentials: true
      })
    

  handleSubmit = e => {
    e.preventDefault();
    const {position,company,description,link} = this.state
      return this.api.post('/job', {position,company,description,link})
        .then(({ data }) => data);
    
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
