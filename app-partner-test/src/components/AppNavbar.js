import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import { 
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';

class AppNavbar extends Component {
  state = {
    isOpen: false
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar dark expand="sm" className="nav-css">
          <Container>
            <NavbarBrand>
              <NavLink to="/">Reactor</NavLink>
            </NavbarBrand>
            {
              this.props.login ?
                <NavbarToggler onClick={this.toggle} />
              :
                <div/>
            }
              <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  {
                    this.props.login ?
                    <NavLink to="login">
                      Log In
                    </NavLink>
                    :
                    <div/>
                  }
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default AppNavbar;
