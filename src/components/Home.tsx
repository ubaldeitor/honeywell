import React from 'react';
import { Component } from "react";
import { Container, Row, Col } from 'react-bootstrap';

class Home extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <h1>Welcome</h1>
                        <h3>Student Manager System</h3>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Home;