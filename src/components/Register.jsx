import React, { Component } from 'react'
import axios from 'axios'
import { Link, Navigate } from 'react-router-dom'

class Register extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    message: '',
  }

  //Register form
  formSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password_confirmation: this.state.password_confirmation
    }
    axios.post('/register', data)
      .then((response) => {
        localStorage.setItem('token', response.data.token)
        this.setState({
          loggedIn: true
        })
        this.props.setUser(response.data.user)
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    if (this.state.loggedIn === true || localStorage.getItem('token')) {
      return <Navigate to={'/profile'} />
    }

    return (
      <div className='mt-4'>
        <div className='row'>
          <div className='jumbotron col-lg-4 offset-lg-4'>
            <h3 className='text-center'>Register an Account</h3>
            <form onSubmit={this.formSubmit}>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Username</label>
                <input type="text" className="form-control" name='name' required onChange={(e) => { this.setState({ name: e.target.value }) }} />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" name='email' required onChange={(e) => { this.setState({ email: e.target.value }) }} />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" name='password' required onChange={(e) => { this.setState({ password: e.target.value }) }} />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password Confirmation</label>
                <input type="password" className="form-control" name='password_confirmation' required onChange={(e) => { this.setState({ password_confirmation: e.target.value }) }} />
              </div>
              <button type="submit" className="btn btn-primary btn-block mb-2">Register</button>
              <span>
                Have an account? <Link to='/login'><i>Login</i></Link>
              </span> <br />
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

export default Register