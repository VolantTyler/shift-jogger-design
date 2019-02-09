import React, { Component } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
import {
  Link
} from 'react-router-dom'

export class Navigation extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          {/* <NavbarBrand > */}
          {/* TODO: change other NavLink to this pattern */}
            <Link 
              className="navbar-brand"
              to={'/'} >
              ShiftJogger
            </Link>
          {/* </NavbarBrand> */}
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to={'/'} >
                  <NavLink >Dashboard</NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link to={'/newlog'} >
                  <NavLink >New Log</NavLink>
                </Link>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Log out?
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Yes
                  </DropdownItem>
                  <DropdownItem>
                    No
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>        
      </div>
    )
  }
}

export default Navigation
