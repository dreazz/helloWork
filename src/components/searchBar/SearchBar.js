import React, { Component } from 'react'
import "./search-bar.css" 

export default class SearchBar extends Component {
  render() {
    return (
      <div>
        <input className="search-bar"onChange={this.props.onChange} placeholder="search..." />
      </div>
    )
  }
}
