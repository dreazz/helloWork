import React, { Component } from 'react'

export default class jobCard extends Component {
  render() {
    return (
      <div className="job-card">
        <h1>{this.props.title}</h1>
        <p>{this.props.description}</p>
        <button>See more</button>
      </div>
    )
  }
}
