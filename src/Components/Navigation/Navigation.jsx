import React, { Component } from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import Icon from 'react-icons-kit';
import { scroller } from 'react-scroll';
/** Icons */
import { instagram } from 'react-icons-kit/entypo/instagram';
import { facebook } from 'react-icons-kit/fa/facebook';
import { github } from 'react-icons-kit/icomoon/github';
/** Style */
import './Navigation.css';

class Navigation extends Component {

  scrollTo(componentName) {
    scroller.scrollTo(componentName, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutCubic',
      offset: -80
    })
  }

  render() {
    return (
      <div className="Navigation">
        <Navbar className="my-custom-navbar" inverse>
          <Navbar.Header>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} onClick={(componentName) => this.scrollTo('about')}>
                about me
              </NavItem>
              <NavItem eventKey={2} onClick={(componentName) => this.scrollTo('skills')}>
                skills
              </NavItem>
              <NavItem eventKey={3} onClick={(componentName) => this.scrollTo('opinions')}>
                opinions
              </NavItem>
              <NavItem eventKey={4}>
                hobbies
              </NavItem>
              <NavItem eventKey={4}>
                contact
              </NavItem>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} target="_blank" href="https://www.instagram.com/daniel_kanyo/">
                <Icon size={18} style={{ verticalAlign: 'middle' }} icon={instagram} />
              </NavItem>
              <NavItem eventKey={2} target="_blank" href="https://www.facebook.com/kanyo.daniel">
                <Icon size={18} style={{ verticalAlign: 'middle' }} icon={facebook} />
              </NavItem>
              <NavItem eventKey={2} target="_blank" href="https://github.com/DanielKanyo">
                <Icon size={18} style={{ verticalAlign: 'middle' }} icon={github} />
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
