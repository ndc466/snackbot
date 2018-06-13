import React, { Component } from 'react';
import Scroll from 'react-scroll';
import appdev from '../images/mobile-app-dev.jpg';
import max from "../images/max1.png";
import chatbots from "../images/chatbot2.jpg";
import analytics from "../images/analytics.jpg";
import diagnostics from "../images/diagnostics3.jpg";
import SDKs from "../images/SDKs1.jpeg";

export default class Services extends Component {
  render() {
    return (
      <Scroll.Element name="services">
        <section class="p-0" id="portfolio">
          <div class="container-fluid p-0">
            <div class="row no-gutters popup-gallery">
              <div class="col-lg-4 col-sm-6">
                <a class="portfolio-box">
                  <img class="img-fluid" src={appdev} alt=""/>
                  <div class="portfolio-box-caption">
                    <div class="portfolio-box-caption-content">
                      <div class="project-category text-faded">
                        Mobile Cloud Enterpise
                      </div>
                      <div class="project-name">
                        Mobile Apps
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div class="col-lg-4 col-sm-6">
                <a class="portfolio-box">
                  <img class="img-fluid" src={max} alt=""/>
                  <div class="portfolio-box-caption">
                    <div class="portfolio-box-caption-content">
                      <div class="project-category text-faded">
                        Mobile Cloud Enterpise
                      </div>
                      <div class="project-name">
                        MAX Apps
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div class="col-lg-4 col-sm-6">
                <a class="portfolio-box">
                  <img class="img-fluid" src={chatbots} alt=""/>
                  <div class="portfolio-box-caption">
                    <div class="portfolio-box-caption-content">
                      <div class="project-category text-faded">
                        Mobile Cloud Enterpise
                      </div>
                      <div class="project-name">
                        Intelligent Bots
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div class="col-lg-4 col-sm-6">
                <a class="portfolio-box">
                  <img class="img-fluid" src={analytics} alt=""/>
                  <div class="portfolio-box-caption">
                    <div class="portfolio-box-caption-content">
                      <div class="project-category text-faded">
                        Mobile Cloud Enterpise
                      </div>
                      <div class="project-name">
                        Analytics
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div class="col-lg-4 col-sm-6">
                <a class="portfolio-box">
                  <img class="img-fluid" src={diagnostics} alt=""/>
                  <div class="portfolio-box-caption">
                    <div class="portfolio-box-caption-content">
                      <div class="project-category text-faded">
                        Mobile Cloud Enterpise
                      </div>
                      <div class="project-name">
                        Diagnostics
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div class="col-lg-4 col-sm-6">
                <a class="portfolio-box">
                  <img class="img-fluid" src={SDKs} alt=""/>
                  <div class="portfolio-box-caption">
                    <div class="portfolio-box-caption-content">
                      <div class="project-category text-faded">
                        Mobile Cloud Enterpise
                      </div>
                      <div class="project-name">
                        SDKs
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </Scroll.Element>
    )
  }
};
