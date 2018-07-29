import React, {Component} from 'react';
import{Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './CustomNavbar.css';

export default class CustomNavbar extends Component {
    render (){
        return(
            <Navbar default fluid>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to = '/'> Elementsy </Link>
                    </Navbar.Brand>
                      <Navbar.Toggle />
                </Navbar.Header>

                <Navbar.Collapse>

                    <Nav pullRight >
                    <NavDropdown eventKey={1} title="Menu" id="Menu-dropdown" collapseOnSelect>
                        <MenuItem eventKey="2.1">
                            <Link to='/login'>Login/Profile</Link>
                        </MenuItem>
                        {/* <MenuItem eventKey="2.2">
                            <Link to='/profile'>Profile</Link> */}
                        {/* </MenuItem> */}
                        <MenuItem eventKey="2.3">
                            <Link to='/add'>AddListing</Link>
                        </MenuItem>
                    </NavDropdown>

                     <NavItem eventKey={2}>
                        <Link to='/'> Home </Link>
                    </NavItem>

                    <NavItem eventKey={3}>
                        <Link to='/Cart/'> Cart </Link>
                    </NavItem>





                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}