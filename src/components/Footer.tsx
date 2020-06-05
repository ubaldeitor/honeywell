import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithubSquare} from '@fortawesome/free-brands-svg-icons';

class Footer extends React.Component{
    render(){
        return(
            <Container>
                <Row>
                <Col md={6}>
                    <p>Coded by:<b>Luis Ubaldo Godínez Flores</b></p>
                    <p>To: Honeywell</p>
                </Col>
                <Col md={6}>
                    <p>Visit my github: <a href="https://github.com/ubaldeitor"><FontAwesomeIcon icon={faGithubSquare} /></a></p>
                </Col>
                </Row>
            </Container>
        );
    }
}

export default Footer;