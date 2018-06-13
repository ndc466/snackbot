import React, { Component } from 'react';
import logo from '../images/oracle-red.png';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, NavItem, NavLink, Nav as Navigate } from 'reactstrap';
import Scroll from 'react-scroll';


export default class Navigation extends Component {

  constructor(props) {
    super(props)
    this.state = {
      collapsed: true
    };
    this.scrollToTop = this.scrollToTop.bind(this);
  };

  componentDidMount() {
    Scroll.Events.scrollEvent.register('begin', function () {
      console.log("begin", arguments);
    });
    Scroll.Events.scrollEvent.register('end', function () {
      console.log("end", arguments);
    });
    Scroll.scrollSpy.update();
  }
  componentWillUpdate() {
    Scroll.Events.scrollEvent.remove('begin');
    Scroll.Events.scrollEvent.remove('end');
  }
  scrollToTop() {
    Scroll.animateScroll.scrollToTop({
      smooth: "easeInQuint"
    });
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  
  render() {
    return (
      <Navbar expand="lg" light fixed="top" className="mainNav">
        <Scroll.Link activeClass="mainNav">
          <NavbarBrand onClick={this.scrollToTop}>
            <img class="img-icon" src={logo} href=""/>SnackBot
          </NavbarBrand>
          <NavbarToggler right onClick={this.toggleNavbar}/>
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Navigate navbar className="ml-auto">
              <NavItem>
                <NavLink href="">
                  <Scroll.Link to={"about"} spy={true} smooth={"easeInCubic"} duration={500}>About</Scroll.Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="">
                  <Scroll.Link to={"services"} spy={true} smooth={"easeInCubic"} duration={500}>Cloud Services</Scroll.Link>
                </NavLink>
              </NavItem>
            </Navigate>
          </Collapse>
        </Scroll.Link>
      </Navbar>
    )
  }
};
