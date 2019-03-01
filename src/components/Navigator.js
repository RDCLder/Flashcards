import React from 'react';
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/Main.css";

class Navigator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            key: "cards"
        }
    }

    render() {
        return (
            <Row id="NavBar">
                <Col xs={1} className="my-auto"></Col>
                <Col className="my-auto">
                    <h2>Flashify</h2>
                </Col>
                <Col xs={1} className="my-auto">
                    <h4><Link to="/">Cards</Link></h4>
                </Col>
                <Col xs={1} className="my-auto">
                    <h4><Link to="/">Play</Link></h4>
                </Col>
                <Col xs={1} className="my-auto"></Col>
            </Row>
        );
    }
}

export default Navigator;