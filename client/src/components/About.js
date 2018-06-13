import React, { Component } from 'react';
import Scroll from 'react-scroll';

export default class About extends Component {
  render() {
    return (
      <Scroll.Element name="about">
        <section class="bg-primary">
          <div class="container">
            <div class="row">
              <div class="col-lg-8 mx-auto text-center">
                <h2 class="section-heading text-white">The Complete Platform for Mobile Cloud-Native Development</h2>
                <hr class="light my-4"/>
                <p class="text-faded mb-4">Oracle Mobile Cloud Enterpise has everything you need for cloud-native development no matter what your goal is. Develop mobile apps, deploy intelligent chatbots, and much more with a wide range of developer tools and analytics built in!</p>
                <a class="btn btn-light btn-xl js-scroll-trigger" href="https://cloud.oracle.com/mobile">Get Started!</a>
              </div>
            </div>
          </div>
        </section>
      </Scroll.Element>
    )
  }
};
