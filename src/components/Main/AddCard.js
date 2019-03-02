import React from 'react';
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { connect } from "react-redux";
import AddCardModal from "./modals/AddCardModal";
import SaveCardsModal from "./modals/SaveCardsModal";
import actionDeleteCard from "../../actions/actionDeleteCard";
import "../../styles/Main.css";

class AddCard extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        if (this.props.cards.length === 0) {
            var flashcards = this.props.saved.Example;
        }
        else {
            var flashcards = this.props.cards;
        }
        return flashcards;
    }

    render() {
        let flashcards = this.componentWillMount();
        if (flashcards !== undefined) {
            return (
                <Container id="AddCardContainer">

                    {/* Loading Existing Cards */}
                    <Row className="justify-content-center mb-4">
                        {flashcards.map(card => {
                            return <Card className="card m-2" key={card.id}>
                                <Card.Body>
                                    <Card.Title className="cardTitle">
                                        {card.word}
                                        <i className="fas fa-times cardButton"
                                            onClick={() => this.props.eventDeleteCard(card)}
                                        />
                                        <i className="fas fa-pencil-alt cardButton"
                                        />
                                    </Card.Title>
                                    <Card.Text className="cardText">
                                        {card.text}
                                    </Card.Text>
                                </Card.Body>
                            </Card>;
                        })}
                    </Row>

                    {/* Save Button */}
                    <SaveCardsModal />

                    {/* AddCard Button */}
                    <AddCardModal />

                </Container>
            );
        }
        else {
            return (
                <Container id="AddCardContainer">

                    {/* Loading Existing Cards */}
                    <Row className="justify-content-center mb-4">
                    </Row>

                    {/* Save Button */}
                    <SaveCardsModal />

                    {/* AddCard Button */}
                    <AddCardModal />

                </Container>
            );
        }
    }
}

const mapStateToProps = (state) => {
    return {
        cards: state.cards,
        saved: state.saved
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        eventDeleteCard: (card) => dispatch(actionDeleteCard(card))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCard);