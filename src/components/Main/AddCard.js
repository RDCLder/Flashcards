import React from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";
import AddCardModal from "./AddCardModal";
import "../../styles/Main.css";

class AddCard extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <Container id="AddCardContainer">
                <Row className="justify-content-center">
                    <AddCardModal />
                </Row>
            </Container>
        );
    }
}

export default AddCard;