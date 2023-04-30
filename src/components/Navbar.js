import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
    <nav className="navbar bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand text-white">Navbar</a>
            <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="link-offset-2 link-underline link-underline-opacity-75" aria-current="page" href="home">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="link-offset-2 link-underline link-underline-opacity-75" href="contact">Contact Us!</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
  }
}
