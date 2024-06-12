import React, { Component } from 'react'
import News from './News'

export class Health extends Component {
    render() {
        return (
            <News pageSize={this.props.pageSize} category={this.props.category} heading={'Health'}/>

        )
    }
}

export default Health
