import React, { Component } from 'react'

export default class LoginForm extends Component {
  render() {
    return (
    <div>
        <br></br>
        <div className='row  justify-content-center'>
            <div className='col-auto'>
                <input className="form-control" type="text" placeholder="Username" aria-label="Username Input"></input>
            </div>
            <div className='col-auto'>
                <input className="form-control" type="password" placeholder="Password" aria-label="Password Input"></input>
            </div>
            <div className='col-auto'>
                <h3 className='login'>Login</h3>
            </div>
        </div>
    </div>
    )
  }
}
