import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
        <Router>
          <Routes>
            <Route path='/' element={<News pageSize={6} />}/>
            <Route path="/About" element={<About/>}/>
          </Routes>
        </Router>
        </div>
      </div>
    )
  }
}