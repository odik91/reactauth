import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Reset extends Component {
  state = {
    token: '',
    email: '',
    password: '',
    password_confirmation: '',
    message: '',
  }

  formSubmit = (e) => {
    e.preventDefault()
    const data = {
      token: this.state.token,
      email: this.state.email,
      password: this.state.password,
      password_confirmation: this.state.password_confirmation,
    }

    axios.post('/resetpassword', data)
      .then((response) => {
        this.setState({ message: response.data.message })
        document.getElementById('resetPassword').reset()
      })
      .catch((error) => {
        this.setState({ message: error.response.data.message })
      })
  }

  render() {
    // show message
    let error = ""
    if (this.state.message) {
      error = (
        <div>
          <div className='alert alert-danger' role='alert'>
            {this.state.message}
          </div>
        </div>
      )
    }

    return (
      <div className='mt-4'>
        <div className='row'>
          <div className='jumbotron col-lg-4 offset-lg-4'>
            <h3 className='text-center'>Reset Account Password</h3>
            <form onSubmit={this.formSubmit} id='resetPassword'>
              {error}
              <div className="form-group">
                <label htmlFor="pincode">Pin Code</label>
                <input type="text" className="form-control" name='token' required onChange={(e) => { this.setState({ token: e.target.value }) }} />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" name='email' required onChange={(e) => { this.setState({ email: e.target.value }) }} />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">New Password</label>
                <input type="password" className="form-control" name='password' required onChange={(e) => { this.setState({ password: e.target.value }) }} />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password Confirmation</label>
                <input type="password" className="form-control" name='password_confirmation' required onChange={(e) => { this.setState({ password_confirmation: e.target.value }) }} />
              </div>
              <button type="submit" className="btn btn-primary btn-block mb-2">Reset Password</button>
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

export default Reset