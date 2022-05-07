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
import Profile from '../components/Profile'

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
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </Router>
    )
  }
}

export default Header