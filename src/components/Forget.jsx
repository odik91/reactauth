import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Forget extends Component {
  state = {
    email: '',
    message: '',
  }

  formSubmit = (e) => {
    e.preventDefault()
    const data = {
      email: this.state.email,
    }

    axios.post('/forgetpassword', data)
      .then((response) => {
        this.setState({ message: response.data.message })
        document.getElementById('forgetForm').reset()
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
            <h3 className='text-center'>Forgert Password</h3>
            <form onSubmit={this.formSubmit} id="forgetForm">
              {error}
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" name='email' className="form-control" aria-describedby="emailHelp" required onChange={(e) => { this.setState({ email: e.target.value }) }} />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <button type="submit" className="btn btn-primary btn-block mb-2">Forget Password</button>
              <span>
                Have an account? <Link to='/login'><i>Login</i></Link>
              </span> <br />
              <span>
                Need an account? <Link to='/register'><i>Register</i></Link>
              </span>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Forget