import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false
        }
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render (){
        return(
            <header>
                <Navbar dark sticky="top" expand="md">
                    <div className="container">
                        <NavbarBrand className="mr-auto" href="/home"><img src="/assets/images/logo.png" height="30" width="30" alt="FHCCI Logo" /></NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        Home
                                    </NavLink>
                                </NavItem>    
                                <NavItem>
                                    <NavLink className="nav-link" to="/about">
                                        About Us

                                    </NavLink>
                                                                            <NavItem>
                                            <NavLink className="nav-link" to="/staffDirectory">
                                                Meet the Staff
                                            </NavLink>
                                        </NavItem>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </header>
        );
    }
}

export default Header;