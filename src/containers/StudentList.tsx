import React from 'react';
import { Component } from "react";
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { IStudent } from '../types';
import { RootState } from '../reducers';
import { getStudent, deleteStudent } from '../actions/index';

interface ListStudentState {
    students: Array<IStudent>;
    activeStudent: number;
}

type ListStudentProps = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

class StudentList extends Component<ListStudentProps, ListStudentState> {
    constructor(props: ListStudentProps){
        super(props);
        this.state = {
            students: this.props.students,
            activeStudent: 0
        }
        this.renderStudentList = this.renderStudentList.bind(this);
    }

    renderStudentList() {
        return this.props.students.map((studentItem) => {
            console.log('this state students', studentItem);
            return (
                <tr>
                    <td><button onClick={()=>{this.handleSelectStudent(studentItem.email)}}>View Detail</button></td>
                    <td>{studentItem.name}</td>
                    <td>{studentItem.surname}</td>
                    <td>{studentItem.phone}</td>
                    <td>{studentItem.email}</td>
                    <td><button onClick={()=>{this.handleDeleteStudent(studentItem.email)}}>Delete</button></td>
                </tr>
            );
        });
    }

    handleDeleteStudent(emailItem: string){
        console.log("delete email:", emailItem);
        this.props.deleteStudent(emailItem);
    }

    handleSelectStudent(emailItem: string){
        console.log("selected student", emailItem);
        this.props.getStudent(emailItem);
    }

    render() {
        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderStudentList()}
                </tbody>
            </Table>
        );
    }
}

const mapStateToProps = (state: RootState) => ({
    students: state.student.students
});

const mapDispatchToProps = {
    getStudent,
    deleteStudent
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentList);