import React, { Component } from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const NavigationBar = (props) => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">
                <img
                    alt=""
                    height="30"
                    src="http://img0.sm360.ca/images/web/centre-ville-vw/1814/vw-centreville-logo1515013234970.png"
                    className="d-inline-block align-top mr-2"
                />
                {props.dealership.name}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Browse</Nav.Link>
                    <Nav.Link href="#link">For You</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavigationBar;