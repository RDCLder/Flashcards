import React from 'react';
import { Container, Row, Col, Modal, Button, Alert } from "react-bootstrap";
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
            alertMessage: "",
            alertErrorShow: false
        };
    }

    changeWord(e) {
        this.setState({
            word: e.target.value,
            id: e.target.value
        });
    }

    changeText(e) {
        this.setState({
            text: e.target.value
        });
    }

    handleSubmit() {
        let words = this.props.cards.map(card => {
            return card.word;
        });
        if (this.state.word === "") {
            this.setState({ alertMessage: "The word can't be blank!" });
            this.setState({ alertErrorShow: true });
            setTimeout(() => {
                this.setState({ alertErrorShow: false });
            }, 3000);
        }
        else if (this.state.text === "") {
            this.setState({ alertMessage: "The text can't be blank!" });
            this.setState({ alertErrorShow: true });
            setTimeout(() => {
                this.setState({ alertErrorShow: false });
            }, 3000);
        }
        else if (this.state.word.length > 40) {
            this.setState({ alertMessage: "The word cannot exceed 40 characters!" });
            this.setState({ alertErrorShow: true });
            setTimeout(() => {
                this.setState({ alertErrorShow: false });
            }, 3000);
        }
        else if (this.state.word.length > 200) {
            this.setState({ alertMessage: "The text cannot exceed 200 characters!" });
            this.setState({ alertErrorShow: true });
            setTimeout(() => {
                this.setState({ alertErrorShow: false });
            }, 3000);
        }
        else if (words.includes(this.state.word)) {
            this.setState({ alertMessage: `${this.state.word} has already been used!` });
            this.setState({ alertErrorShow: true });
            setTimeout(() => {
                this.setState({ alertErrorShow: false });
            }, 3000);
        }
        else {
            this.setState({
                show: false,
                alertErrorShow: false
            });
            this.props.eventAddCard({
                word: this.state.word,
                text: this.state.text,
                id: this.state.word
            });
        }
    }

    handleShow() {
        this.setState({
            show: true
        });
    }

    handleClose() {
        this.setState({
            show: false
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
                        <i className="fas fa-times modalDismiss" onClick={() => this.handleClose()}></i>
                    </Modal.Header>
                    <Modal.Body>
                        <Container id="AddCardModalContainer">
                            <Row>
                                <h5>Word</h5>
                            </Row>
                            <Row className="mb-4">
                                <textarea type="text"
                                    placeholder="Word goes here"
                                    rows="1"
                                    onChange={(e) => this.changeWord(e)}
                                    className="p-1"
                                />
                            </Row>
                            <Row>
                                <h5>Text</h5>
                            </Row>
                            <Row>
                                <textarea type="text"
                                    placeholder="Text goes here"
                                    rows="5"
                                    onChange={(e) => this.changeText(e)}
                                    className="p-1"
                                />
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

                <Alert variant="danger"
                    show={this.state.alertErrorShow}
                    className="alert"
                >
                    <Alert.Heading>
                        Error
                        <i className="fas fa-times alertDismiss"
                            onClick={() => this.setState({ alertErrorShow: false })}
                        />
                    </Alert.Heading>
                    <p>{this.state.alertMessage}</p>
                </Alert>
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