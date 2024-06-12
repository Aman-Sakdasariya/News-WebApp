import React, { Component } from 'react'
import News from './News'

export class Technology extends Component {
  render() {
    return (
      <div>
        <News pageSize={this.props.pageSize} category={this.props.category} heading={'Technology'}/>
      </div>
    )
  }
}

export default Technology
