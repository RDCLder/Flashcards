import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import "../styles/Main.css";

class AddCard extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <Row id="AddCardContainer">
                AddCard Component
            </Row>
        );
    }
}

export default AddCard;