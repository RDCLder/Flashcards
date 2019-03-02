import React from 'react';
import { Container, Row, Col, Card, Collapse } from "react-bootstrap";
import { connect } from "react-redux";
import actionDeleteSavedCard from "../../../actions/actionDeleteSavedCard";
import actionDeleteCollection from "../../../actions/actionDeleteCollection";
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
            <Container
                aria-controls={this.props.name}
                aria-expanded={open}
                className="CollectionContainer"
            >
                <Row className="CollectionHead">
                    <Col className="my-auto pl-4">
                        <h4>{this.props.name}</h4>
                    </Col>
                    <Col></Col>
                    <Col className="textRight my-auto">
                        {this.props.saved[this.props.name].length} Flashcard(s)
                    </Col>
                    <Col xs={1} className="textRight my-auto pr-4">
                        <i className="fas fa-chevron-down CollectionButton"
                            onClick={() => this.setState({ open: !open })}
                        />
                    </Col>
                    <Col xs={1} className="textRight my-auto pr-4">
                        <i className="fas fa-times CollectionButton"
                            onClick={() => this.props.eventDeleteCollection(this.props.name)}
                        />
                    </Col>
                </Row>
                <Collapse in={this.state.open}>
                    <Row className="CollectionBody justify-content-center" 
                        id={this.props.name} 
                        onClick={() => this.setState({ open: !open })}
                    >
                        {this.props.saved[this.props.name].map(card => {
                            return <Card className="card m-2" key={card.id}>
                                <Card.Body>
                                    <Card.Title className="cardTitle">
                                        {card.word}
                                        <i className="fas fa-times cardButton"
                                            onClick={() => this.props.eventDeleteSavedCard(this.props.name, card)}
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
                </Collapse>
            </Container>
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
        eventDeleteSavedCard: (name, card) => dispatch(actionDeleteSavedCard(name, card)),
        eventDeleteCollection: (name) => dispatch(actionDeleteCollection(name))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Collection);