import React, { Component } from 'react'
import News from './News'

export class Health extends Component {
    render() {
        return (
            <News pageSize={this.props.pageSize} category={this.props.category} />

        )
    }
}

export default Health
