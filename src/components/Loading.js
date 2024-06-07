import React, { Component } from 'react';
import loading from './loading.gif'
export class Loading extends Component {
  render() {
    return (
      <div className='d-flex justify-content-center align-items-center' style={{height:'60vh'}}>
        <img src={loading} alt='Loading...' style={{height:'100px'}}/>
      </div>
    )
  }
}

export default Loading
