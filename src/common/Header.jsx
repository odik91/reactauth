import React, { Component } from 'react'
import Nav from './Nav'
import Home from '../components/Home'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom"
import Login from '../components/Login'
import Register from '../components/Register'
import Forget from '../components/Forget'

class Header extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forget" element={<Forget />} />
          </Routes>
        </div>
      </Router>
    )
  }
}

export default Header