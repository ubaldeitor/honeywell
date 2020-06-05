import React from 'react';
import { Component } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { RootState } from '../reducers';
import { connect } from 'react-redux';

type DetailStudentProps = ReturnType<typeof mapStateToProps>

class StudentsDetail extends Component<DetailStudentProps> {
    
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <img src={'/img/user.png'} alt="user_image" width="200"/>
                    </Col>
                    <Col>
                        <Row>
                            <Col>Name:</Col>
                            <Col>{this.props.activeStudent.name}</Col>
                        </Row>
                        <Row>
                            <Col>Surname:</Col>
                            <Col>{this.props.activeStudent.surname}</Col>
                        </Row>
                        <Row>
                            <Col>Phone:</Col>
                            <Col>{this.props.activeStudent.phone}</Col>
                        </Row>
                        <Row>
                            <Col>Email:</Col>
                            <Col>{this.props.activeStudent.email}</Col>
                        </Row>
                        <Row>
                            <Col>Address:</Col>
                            <Col>{this.props.activeStudent.address}</Col>
                        </Row>
                        <Row>
                            <Col>Zip Code:</Col>
                            <Col>{this.props.activeStudent.zipCode}</Col>
                        </Row>
                        <Row>
                            <Col>GPA:</Col>
                            <Col>{this.props.activeStudent.gpa}</Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = (state: RootState) => ({
    activeStudent: state.student.activeStudent
});

export default connect(mapStateToProps)(StudentsDetail);