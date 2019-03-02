import React from 'react';
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import { connect } from "react-redux";
import actionAddCard from "../../../actions/actionAddCard";
import "../../../styles/Main.css";

class AddCardModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false,
            word: "",
            text: "",
            id: "",
        };
    }

    changeWord(e) {
        this.setState({
            word: e.target.value,
            id: e.target.value
        });
        console.log(this.state.show, this.state.word, this.state.text, this.state.id);
    }

    changeText(e) {
        this.setState({
            text: e.target.value
        });
        console.log(this.state.show, this.state.word, this.state.text, this.state.id);
    }

    handleSubmit() {
        if (this.state.word === "") {
            alert("The word can't be blank!");
        }
        else if (this.state.text === "") {
            alert("The text can't be blank!");
        }
        else if (this.state.word.length > 40) {
            alert("The word cannot exceed 40 characters!");
        }
        else if (this.state.word.length > 200) {
            alert("The text cannot exceed 200 characters!");
        }
        else if (this.props.cards.includes(this.state.word)) {
            alert(`${this.state.word} has already been used!`);
        }
        else {
            this.setState({
                show: false 
            });
            this.props.eventAddCard({
                word: this.state.word,
                text: this.state.text,
                id: this.state.word
            });
        }
    }

    handleClose() {
        this.setState({
            show: false 
        });
    }

    handleShow() {
        this.setState({
            show: true 
        });
    }

    render() {
        return (
            <>
                <button type="button" 
                    className="btn floatButton" 
                    id="AddCardButton"
                    onClick={() => this.handleShow()}
                >
                    <i className="fas fa-plus"></i>
                </button>

                <Modal show={this.state.show} onHide={this.handleClose} centered size="lg">
                    <Modal.Header>
                        <Modal.Title>Add Card</Modal.Title>
                        <i className="fas fa-times" onClick={() => this.handleClose()}></i>
                    </Modal.Header>
                    <Modal.Body>
                        <Container>
                            <Row>
                                <Col>
                                    <h5>Word</h5>
                                    <input type="text"
                                        placeholder="Word goes here"
                                        onChange={(e) => this.changeWord(e)}
                                        className="modalInput"
                                    />
                                </Col>

                                <Col>
                                    <h5>Text</h5>
                                    <input type="text"
                                        placeholder="Text goes here"
                                        onChange={(e) => this.changeText(e)}
                                        className="modalInput"
                                    />
                                </Col>
                            </Row>
                        </Container>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={() => this.handleSubmit()}>
                            Submit
                        </Button>
                        <Button variant="secondary" onClick={() => this.handleClose()}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
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
        eventAddCard: (card) => dispatch(actionAddCard(card))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCardModal);