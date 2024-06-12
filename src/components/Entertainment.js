import React, { Component } from 'react'
import News from './News'

export class Entertainment extends Component {
    render() {
        return (
            <News pageSize={this.props.pageSize} category={this.props.category} heading={'Entertainment'}/>
        )
    }
}

export default Entertainment
