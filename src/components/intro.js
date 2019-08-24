import React, { Component } from 'react'

export default class Intro extends Component {
  render() {
    return (
    <div className="intro-page">
        <div className="container-fluid">
            <h1 className="center">Welcome to my profile!</h1>
            <div className="social-icons animate-icons center">
            <ul>
                <li><a href="https://github.com/adityabhavikatti/" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a></li>
                <li><a href="https://www.linkedin.com/in/adityabhavikatti/" target="_blank"><i class="fa fa-linkedin"aria-hidden="true"></i></a></li>
                <li><a href="https://www.facebook.com/aditya.bhavikatti/" target="_blank"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                <li><a href="mailto:aditya.bhavikatti@gmail.com" target="_blank"><i class="fa fa-envelope"aria-hidden="true"></i></a></li>
            </ul>
            </div>
            
        </div>
    </div>
    );
  }
}