import React from 'react';
import { Row, Col, Card, Collapse } from "react-bootstrap";
import { connect } from "react-redux";
import actionDeleteSavedCard from "../../../actions/actionDeleteSavedCard";
import "../../../styles/Main.css";

class Collection extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            open: false,
        };
    }

    render() {
        const { open } = this.state;
        return (
            <>
                <Row
                    onClick={() => this.setState({ open: !open })}
                    aria-controls="CollectionCards"
                    aria-expanded={open}
                >
                    <Col>
                        <h4>{this.props.name}</h4>
                    </Col>
                    <Col>
                        {this.props.saved[this.props.name].length} Flashcards
                    </Col>
                </Row>
                <Collapse in={this.state.open}>
                    <div id="CollectionCards">
                        {this.props.saved[this.props.name].map(card => {
                            return <Card className="card m-2" key={card.id}>
                                <Card.Body>
                                    <Card.Title className="cardTitle">
                                        {card.word}
                                        <i className="fas fa-times cardButton"
                                            onClick={() => this.props.eventDeleteSavedCard(card)}
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
                    </div>
                </Collapse>
            </>
        );
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
        eventDeleteSavedCard: (name, card) => dispatch(actionDeleteSavedCard(name, card))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Collection);