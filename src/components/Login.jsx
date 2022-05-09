import axios from 'axios';
import React, { Component } from 'react'
import { Link, Navigate } from 'react-router-dom'

class Login extends Component {
  state = {
    email: '',
    pasword: '',
    message: '',
    loggedIn: false
  }

  //login form
  formSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: this.state.email,
      password: this.state.password
    }
    axios.post('/login', data)
      .then((response) => {
        localStorage.setItem('token', response.data.token)
        this.setState({
          loggedIn: true
        })
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    // After login redirect to profile page
    if (this.state.loggedIn === true) {
      return <Navigate to={'/profile'} />
    }

    return (
      <div className='mt-4'>
        <h1>{this.state.loggedIn}</h1>
        <div className='row'>
          <div className='jumbotron col-lg-4 offset-lg-4'>
            <h3 className='text-center'>Login Account</h3>
            <form onSubmit={this.formSubmit}>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" name='email' required onChange={(e) => { this.setState({ email: e.target.value }) }} />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" name='password' required onChange={(e) => { this.setState({ password: e.target.value }) }} />
              </div>
              <button type="submit" className="btn btn-primary btn-block mb-2">Login</button>
              <span>
                Forget password <Link to='/forget'><i>Click Here</i></Link>
              </span>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Login