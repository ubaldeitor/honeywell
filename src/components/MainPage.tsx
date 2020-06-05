import React from 'react';
import { Component } from "react";
import {Container} from 'react-bootstrap';
import {Route} from 'react-router-dom';
import Home from './Home';
import AddStudents from '../containers/AddStudents';
import StudentView from '../components/StudentView';

class MainPage extends Component {
    render(){
        return(
            <Container>
                <Route exact={true} path="/" component={Home} />
                <Route path="/addStudents" component={AddStudents} />
                <Route path="/studentView" component={StudentView} />
            </Container>
        );
    }
}

export default MainPage;