import React, { Component } from 'react';
import Scroll from 'react-scroll';

export default class Header extends Component {
  render() {
    return (
      <Scroll.Element name="header">
      <header class="masthead text-center text-white d-flex">
        <div class="container my-auto">
          <div class="row">
            <div class="col-sm-10 mx-auto">
              <h2 class="text-uppercase">
                <strong>Welcome to Oracle Snackbot</strong>
              </h2>
              <hr/>
            </div>
            <div class="col-lg-8 mx-auto">
              <h4 class="text-faded mb-5">Click on the chat icon in the bottom right-hand corner and order your snack now!</h4>
              <a class="btn btn-primary btn-xl js-scroll-trigger" href="#about">Find Out More</a>
            </div>
          </div>
        </div>
      </header>
      </Scroll.Element>
    )
  }
};
