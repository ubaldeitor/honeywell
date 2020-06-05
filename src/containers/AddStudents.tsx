import React, { ChangeEvent } from 'react';
import { Component } from "react";
import {
    Container,
    Row,
    Col,
    Form,
    Button
} from 'react-bootstrap';
import { IStudent } from '../types';
import { connect } from 'react-redux';
import { RootState } from '../reducers';
import { addStudent } from '../actions/index';

/*interface AddStudentState {
    idStudent: number;
    name: string;
    surname: string;
    phone: number;
    email: string;
    address: string;
    zipCode: string;
    gpa: number;
}*/

interface AddStudentState {
    studentInput: IStudent;
}

type AddStudentProps = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

class AddStudents extends Component<AddStudentProps, AddStudentState> {
    constructor(props: AddStudentProps) {
        super(props);
        this.state = {
            studentInput: {
                idStudent: 0,
                name: '',
                surname: '',
                address: '',
                phone: 0,
                email: '',
                zipCode: '00000',
                gpa: 0.0
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(ev : ChangeEvent<HTMLInputElement>) {
        const target : HTMLInputElement = ev.currentTarget as HTMLInputElement;
                const name : string = target.name;
                const value: string = target.value;
                this.setState( (current) => ({ ...current, 
                    studentInput:{
                        ...current.studentInput, [name]: value
                        }
                     }));
    }

    handleSubmit(event: any) {
        console.log('student was submitted: ', event);
        console.log('payload', this.state.studentInput);
        event.preventDefault();
        this.props.addStudent(this.state.studentInput);
        /*this.setState({studentInput:{
            idStudent: 0,
                name:'',
                surname:'',
                address:'',
                phone: 0,
                email: '',
                zipCode: '00000',
                gpa: 0.0
        }});*/
    }
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <h1>Student register</h1>
                        <h3>Please introduce student data:</h3>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formName">
                                    <Form.Label>Name:</Form.Label>
                                    <Form.Control type="text" name="name" defaultValue={this.state.studentInput.name}
                                        onChange={this.handleChange} />
                                    <Form.Text className="text-muted">
                                        Tell us who are you.
                                </Form.Text>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formSureName">
                                    <Form.Label>Surname:</Form.Label>
                                    <Form.Control type="text" name="surname" defaultValue={this.state.studentInput.surname}
                                        onChange={this.handleChange} />
                                    <Form.Text className="text-muted">
                                        Write your surename.
                                </Form.Text>
                                </Form.Group>
                            </Form.Row>
                            <Form.Group controlId="formAddres">
                                <Form.Label>Address:</Form.Label>
                                <Form.Control type="text" name="address" defaultValue={this.state.studentInput.address}
                                    onChange={this.handleChange} />
                                <Form.Text className="text-muted">
                                    Tell us where you live.
                                </Form.Text>
                            </Form.Group>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formZipCode">
                                    <Form.Label>Zip Code:</Form.Label>
                                    <Form.Control type="text" name="zipCode" defaultValue={this.state.studentInput.zipCode}
                                        onChange={this.handleChange} />
                                    <Form.Text className="text-muted">
                                        Tell us what is your zip code.
                                </Form.Text>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" name="email" defaultValue={this.state.studentInput.email}
                                        onChange={this.handleChange} />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                </Form.Text>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formPhone">
                                    <Form.Label>Phone number</Form.Label>
                                    <Form.Control type="text" name="phone" defaultValue={this.state.studentInput.phone}
                                        onChange={this.handleChange} />
                                    <Form.Text className="text-muted">
                                        Tell us your phone to get in touch.
                                </Form.Text>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGpa">
                                    <Form.Label>GPA:</Form.Label>
                                    <Form.Control type="text" name="gpa" defaultValue={this.state.studentInput.gpa}
                                        onChange={this.handleChange} />
                                    <Form.Text className="text-muted">
                                        Tell us what is your GPA.
                                </Form.Text>
                                </Form.Group>
                            </Form.Row>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = (state: RootState) => ({
    students: state.student.students
});

const mapDispatchToProps = {
    addStudent
}

export default connect(mapStateToProps, mapDispatchToProps)(AddStudents);