import React from "react";
import { MenuItem, NavDropdown, NavItem, Nav } from "react-bootstrap";
import { Collapse } from 'react-collapse';

export default class ExtraInfo extends React.Component {
    state = {
        Activekey: '1'
    }
    handleSelect(eventKey, event) {
        this.setState({ Activekey: eventKey });
        event.preventDefault();
    }

    render() {
        return (
            <div style={{ marginTop: 50}}>
                <Nav  bsStyle="tabs" activeKey={this.state.Activekey} onSelect={(k, c) => this.handleSelect(k, c)}>
                    <NavItem eventKey="1" >
                        NavItem 1 content
          </NavItem>
                    <NavItem eventKey="2" title="Item">
                        NavItem 2 content
          </NavItem>
                    <NavItem eventKey="3" title="Item">
                        NavItem 3 content
          </NavItem>
                </Nav>
                <Collapse isOpened={this.state.Activekey === '1' ? true : false}>
                    <h1>one</h1>
                </Collapse>
                <Collapse isOpened={this.state.Activekey === '2' ? true : false}>
                    <h1>two</h1>
                </Collapse>
                <Collapse isOpened={this.state.Activekey === '3' ? true : false}>
                    <h1>three</h1>
                </Collapse>
            </div>
        );
    }
};

