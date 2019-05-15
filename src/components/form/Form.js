import React, { Component } from 'react'
const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

export default class Form extends Component {
  state={
    title:"",
    company:"",
    position:"",
    link:""
  }

  handleSubmit = e => {
   

    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });
  render() {
    const { name, description } = this.state;
      return (
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>
              Your Name: <input type="text" name="title" value={title} onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <label>
              Description: <input type="text" name="description" value={description} onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      );
  }
}
