import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import About from './components/About';
import Health from './components/Health';
import {
  Route,
  Routes
} from 'react-router-dom'
import Sport from './components/Sport';
import Business from './components/Business';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar setCategory={this.setCategory} />
        <div className="container">
          <Routes>
            <Route path='/' element={<News pageSize={9} category={'general'}/>}/>
            <Route path='/Sport' element={<Sport pageSize={9} category={'sports'}/>}/>
            <Route path='/Health' element={<Health pageSize={9} category={'health'}/>}/>
            <Route path='/Business' element={<Business pageSize={9} category={'business'}/>}/>
            <Route path="/About" element={<About/>}/>
          </Routes>
        </div>
      </div>
    )
  }
}