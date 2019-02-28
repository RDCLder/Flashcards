import React from 'react';
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import "../../styles/Main.css";

class AddCardModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false,
            word: "",
            text: ""
        };
    }

    changeWord(e) {
        this.setState({
            ...this.state,
            word: e.target.value
        });
    }

    changeText(e) {
        this.setState({
            ...this.state,
            text: e.target.value
        });
    }

    handleSubmit() {
        if (this.state.word === "") {
            alert("The word can't be blank!");
        }
        else if (this.state.text === "") {
            alert("The text can't be blank!");
        }
        else {
            this.setState({ show: false });
        }
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    render() {
        return (
            <>
                <Button onClick={() => this.handleShow()}>
                    <h4>ADD CARD</h4>
                </Button>

                <Modal show={this.state.show} onHide={this.handleClose} centered fluid="true">
                    <Modal.Header>
                        <Modal.Title>Add Card</Modal.Title>
                        <i class="fas fa-times" onClick={() => this.handleClose()}></i>
                    </Modal.Header>
                    <Modal.Body>
                        <Container>
                            <Row>
                                <Col>
                                    <h5>Word</h5>
                                    <input type="text"
                                        placeholder="Word"
                                        onChange={(e) => this.changeWord(e)}
                                    />
                                </Col>

                                <Col>
                                    <h5>Text</h5>
                                    <input type="text"
                                        placeholder="Word"
                                        onChange={(e) => this.changeText(e)}
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

export default AddCardModal;