import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import About from './components/About';
import Health from './components/Health';
import Sport from './components/Sport';
import Business from './components/Business';
import Entertainment from './components/Entertainment';
import Science from './components/Science';
import Technology from './components/Technology';
// import Search from './components/Search';
import {
  Route,
  Routes
} from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar setCategory={this.setCategory} />
        <div className="container">
          <Routes>
            <Route path='/' element={<News pageSize={9} category={'general'} />} />
            <Route path='/Sport' element={<Sport pageSize={9} category={'sports'} />} />
            <Route path='/Health' element={<Health pageSize={9} category={'health'} />} />
            <Route path='/Business' element={<Business pageSize={9} category={'business'} />} />
            <Route path='/Entertainment' element={<Entertainment pageSize={9} category={'entertainment'} />} />
            <Route path='/Science' element={<Science pageSize={9} category={'science'} />} />
            <Route path='/Technology' element={<Technology pageSize={9} category={'technology'} />} />
            {/* <Route path='/Search' element={<Search pageSize={9} />} /> */}
            <Route path="/About" element={<About />} />
          </Routes>
        </div>
      </div>
    )
  }
}