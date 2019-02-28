import React from 'react';
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/Base.css";

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
                <Col xs={3} className="my-auto">
                    <h2>App Name</h2>
                </Col>
                <Col className="my-auto">
                    {/* <h3>FLASHCARDS</h3> */}
                </Col>
                <Col xs={3} className="my-auto">
                </Col>
            </Row>
        );
    }
}

export default Navigator;