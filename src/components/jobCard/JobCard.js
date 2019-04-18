import React, { Component } from 'react'
import "./jobCard.css"

export default class jobCard extends Component {
  render() {
    return (
      <div className="job-card">
        <h1>{this.props.position}</h1>
        <p><strong>Company: </strong>{this.props.company}</p>
        <p><strong>status: </strong>{this.props.status}</p>
        <p><strong>date: </strong>{this.props.date}</p>
        <button><a href={this.props.link} target="_blank">See more</a></button>
      </div>
    )
  }
}
