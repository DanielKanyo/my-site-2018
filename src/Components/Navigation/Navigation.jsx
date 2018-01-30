import React, { Component } from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import Icon from 'react-icons-kit';
/** Icons */
import { instagram } from 'react-icons-kit/entypo/instagram';
import { facebook } from 'react-icons-kit/fa/facebook';
import { github } from 'react-icons-kit/icomoon/github';
/** Style */
import './Navigation.css';

class Navigation extends Component {
  render() {
    return (
      <div className="Navigation">
        <Navbar className="my-custom-navbar" inverse>
          <Navbar.Header>
            <Navbar.Brand className="navbar-brand">
              daniel kanyo
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1}>
                about me
              </NavItem>
              <NavItem eventKey={2}>
                skills
              </NavItem>
              <NavItem eventKey={3}>
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
