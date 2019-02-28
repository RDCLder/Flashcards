import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import "../styles/Main.css";

class Saved extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <Row id="SavedContainer">
                Saved Component
            </Row>
        );
    }
}

export default Saved;