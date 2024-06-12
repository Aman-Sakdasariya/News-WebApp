import React, { Component } from 'react'
import News from './News'

export class Sport extends Component {
  render() {
    return (
        <News pageSize={this.props.pageSize} category={this.props.category} heading={'Sport'}/>
    )
  }
}

export default Sport