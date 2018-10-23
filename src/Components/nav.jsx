import React from 'react';
import { Navbar, Nav, NavDropdown, MenuItem, NavItem } from "react-bootstrap";

export default class extends React.Component {
    render() {
        return (
            <Navbar collapseOnSelect style={styles.container} className="navBar">
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#brand">Rhythum</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight style={window.innerWidth<=770?{}:{position:'relative',left:'20%',transform:'translateX(-20%)'}}>
                        <NavItem eventKey={1} href="#">
                            Link Right
      </NavItem>
                        <NavItem eventKey={2} href="#">
                            Link Right
      </NavItem>
                        <NavItem eventKey={2} href="#">
                            Link Right
      </NavItem>
                        <NavItem eventKey={2} href="#">
                            Link Right
      </NavItem>
                        <NavItem eventKey={2} href="#">
                            Link Right
      </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

const styles = {
    container: {
        backgroundColor: "transparent",
        border: 0,
        position: 'fixed',
        zIndex: 99,
        width:'100%',
        color: '#fff !important'
    },
    navItem: {
        color: '#fff !important'
    }
};