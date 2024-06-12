import React, { Component } from 'react'
import News from './News'

export class Science extends Component {
  render() {
    return (
      <div>
        <News pageSize={this.props.pageSize} category={this.props.category} heading={'Science'}/>
      </div>
    )
  }
}

export default Science
