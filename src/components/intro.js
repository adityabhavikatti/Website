import React, { Component } from 'react'

export default class Intro extends Component {
  render() {
    return (
    <div className="intro-page">
        <div className="container-fluid">
            <h1 className="center">Welcome to my profile!</h1>
            <div className="social-icons animate-icons center">
            <ul>
                <li><a href="https://github.com/adityabhavikatti/" target="blank"><i className="fa fa-github"></i></a></li>
                <li><a href="https://www.linkedin.com/in/adityabhavikatti/" target="blank"><i className="fa fa-linkedin"></i></a></li>
                <li><a href="https://www.facebook.com/aditya.bhavikatti/" target="blank"><i className="fa fa-facebook"></i></a></li>
                <li><a href="mailto:aditya.bhavikatti@gmail.com" target="blank"><i className="fa fa-envelope"></i></a></li>
            </ul>
            </div>
            
        </div>
    </div>
    );
  }
}
