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
import axios from 'axios';

class Header extends Component {
  state = {
    user: {},
  }

  componentDidMount() {
    // login user data
    axios.get('/user')
      .then((response) => {
        this.setUser(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }

  setUser = (user) => {
    this.setState({ user: user })
  }

  render() {
    return (
      <Router>
        <div>
          <Nav user={this.state.user} setUser={this.setUser} />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/login" element={<Login user={this.state.user} setUser={this.setUser} />} />
            <Route path="/register" element={<Register user={this.state.user} setUser={this.setUser} />} />
            <Route path="/forget" element={<Forget />} />
            <Route path="/profile" element={<Profile user={this.state.user} />} />
          </Routes>
        </div>
      </Router>
    )
  }
}

export default Header