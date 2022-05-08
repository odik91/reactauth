import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Forget extends Component {
  render() {
    return (
      <div className='mt-4'>
        <div className='row'>
          <div className='jumbotron col-lg-4 offset-lg-4'>
            <h3 className='text-center'>Forgert Password</h3>
            <form>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" aria-describedby="emailHelp" />
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