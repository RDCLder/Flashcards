import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Navigator from "./Navigator";
import "../styles/Base.css";

class Base extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <Container fluid="true" id="BaseContainer">
                <Navigator />
                {this.props.children}
            </Container>
        );
    }
}

export default Base;