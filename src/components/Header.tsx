import React from "react";
import { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

class Header extends Component {

    render() {
        return (
            <Container>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="/">Honeywell App</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Item><Link to="/addStudents">Add Students</Link></Nav.Item>
                            <Nav.Item><Link to="/studentView">Students Dashboard</Link></Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        );
    }
}

export default Header;