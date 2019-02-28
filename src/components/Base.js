import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Navigator from "./Navigator";
import "../styles/Base.css";

class Base extends React.Component {

    render() {
        return (
            <Container fluid="true" className="BaseContainer my-auto">
                <Navigator />
                {this.props.children}
            </Container>
        );
    }
}

export default Base;