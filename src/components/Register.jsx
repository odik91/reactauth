import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Register extends Component {
  render() {
    return (
      <div className='mt-4'>
        <div className='row'>
          <div className='jumbotron col-lg-4 offset-lg-4'>
            <h3 className='text-center'>Register an Account</h3>
            <form>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Username</label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password Confirmation</label>
                <input type="password" className="form-control" />
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