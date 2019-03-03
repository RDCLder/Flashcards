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
                    <Link to="/"><h2>Flashify</h2></Link>
                </Col>
                <Col xs={1} className="my-auto">
                    <Link to="/"><h4>Cards</h4></Link>
                </Col>
                <Col xs={1} className="my-auto">
                    <Link to="/play"><h4>Play</h4></Link>
                </Col>
                <Col xs={1} className="my-auto"></Col>
            </Row>
        );
    }
}

export default Navigator;