import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import LoginForm from '../components/LoginForm'

export default class Home extends Component {
  render() {
    return (
        <> 
            <Navbar />
            <LoginForm />
        </>
    )
  }
}
