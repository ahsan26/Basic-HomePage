import React from "react";
import { Row, Col } from "react-bootstrap";

export default _ => (
    <Row style={{ backgroundColor: 'rgba(0,0,0,0.9)' ,width:'101%',paddingTop:10}}>
        <Col md={4} sm={6} xs={12} style={{paddingRight:30}} className="collection">
            <img src="http://rhythm.bestlooker.pro/images/fashion/image-1.jpg" alt="" style={{ width: '100%' }} />
        </Col>
        <Col md={4} sm={6} xs={12} style={{paddingRight:30}} className="collection">
            <img src="http://rhythm.bestlooker.pro/images/fashion/image-2.jpg" alt="" style={{ width: '100%' }} />

        </Col>
        <Col md={4} sm={6} xs={12} style={{paddingRight:30}} className="collection">
            <img src="http://rhythm.bestlooker.pro/images/fashion/image-3.jpg" alt="" style={{ width: '100%' }} />
        </Col>
    </Row>
);