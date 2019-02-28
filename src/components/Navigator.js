import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/Base.css";

class Navigator extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <Row id="NavBar">
                <Col xs={2} className="my-auto">
                    <h4>LEFT</h4>
                </Col>
                <Col className="my-auto">
                    <h4>CENTER</h4>
                </Col>
                <Col xs={2} className="my-auto">
                    <h4>RIGHT</h4>
                </Col>


                {/* <Link to="/">
                    <button type="button" className="btn floatButton" id="resetButton">
                        <i className="fas fa-times"></i>
                    </button>
                </Link> */}

            </Row>
        );
    }
}

export default Navigator;