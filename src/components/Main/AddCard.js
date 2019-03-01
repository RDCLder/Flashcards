import React from 'react';
import { Container, Row, Col, Card } from "react-bootstrap";
import { connect } from "react-redux";
import AddCardModal from "./AddCardModal";
import "../../styles/Main.css";

class AddCard extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {

        let flashcards = [
            {
                word: "Test 1",
                text: "This is a test.",
                id: 1
            },
            {
                word: "Test 2",
                text: "This is another test.",
                id: 2
            },
            {
                word: "Test 3",
                text: "This is a third test.",
                id: 3
            }
        ]

        return (
            <Container id="AddCardContainer">
                <Row className="justify-content-center mb-4">
                    {flashcards.map(card => {
                        return <Card className="card m-2">
                            <Card.Body>
                                <Card.Title className="cardTitle">
                                    {card.word}
                                </Card.Title>
                                <Card.Text>
                                    {card.text}
                                </Card.Text>
                            </Card.Body>
                        </Card>;
                    })}
                </Row>
                <Row className="justify-content-center">
                    <AddCardModal />
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {

    };
};

const mapDispatchToProps = (dispatch) => {
    return {

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCard);