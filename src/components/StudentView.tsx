import React from 'react';
import { Component } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import StudentList from '../containers/StudentList';
import StudentsDetail from '../containers/StudentsDetail';

class StudentView extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <h1>Students registered</h1>
                        <StudentList />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h1>Student detail</h1>
                        <StudentsDetail />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default StudentView;