import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Routes from './Routes';
import "../index.css"

class MyAppNavbar extends Component {

    render() {
        return (
            <React.Fragment >
                <Navbar collapseOnSelect expand="md" className='grad'  fixed="top" variant= 'dark' >
                    <Navbar.Brand as={Link} to="/" ><span className='txt-2 title'> ANY</span><span className='txt-1 title'>NEWS</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav activeKey={window.location.pathname} className='txt-1 nav' variant='pills'>
                            <Nav.Item href="/">
                                <Nav.Link as={Link} to="/" eventKey="/home" title="Home">
                                    Home
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} to="/usa" title="Usa">
                                    Usa
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} to="/europe" eventKey="europe" title="Europe">
                                    Europe
                                </Nav.Link>
                            </Nav.Item>

                            <NavDropdown title="Ukraine" id="nav-dropdown">
                                <NavDropdown.Item>
                                    War
                                </NavDropdown.Item>

                                <NavDropdown.Item>
                                    Fresh news
                                </NavDropdown.Item>
                                <NavDropdown.Divider />

                                <NavDropdown.Item> Enterprise pricing
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Routes />
            </React.Fragment>
        );
    }
}
export default MyAppNavbar;
