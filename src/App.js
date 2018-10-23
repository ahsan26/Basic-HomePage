import React, { Component } from 'react';
import './App.css';
import Nav from "./Components/nav";
import Banner from "./Components/banner";
import Collections from "./Components/collections";
import "./utils";
import { Row, Col } from "react-bootstrap";
import { Container } from "reactstrap";
import ExtraInfo from "./Components/ExtraInfo";
import NewsLetter from "./Components/NewsLetter";
class App extends Component {

  render() {
    return (
      <div className="App">
        <Nav />
        <Banner />
        <Collections />

        <Container>
          <Row style={{marginTop:80}}>
            <Col md={4} className="mainContent"><img src="http://rhythm.bestlooker.pro/images/fashion/image-4.jpg" alt=""/></Col>
            <Col md={4} className="mainContent"><img src="http://rhythm.bestlooker.pro/images/fashion/image-5.jpg" alt=""/></Col>
            <Col md={4} className="mainContent"><img src="http://rhythm.bestlooker.pro/images/fashion/image-6.jpg" alt=""/></Col>
          </Row>
          <ExtraInfo />
        </Container>
<NewsLetter />
      </div>
    );
  }
}

export default App;
