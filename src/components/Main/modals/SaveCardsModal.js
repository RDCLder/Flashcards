import React from 'react';
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import { connect } from "react-redux";
import actionSaveCards from "../../../actions/actionSaveCards";
import "../../../styles/Main.css";

class SaveCardsModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: ""
        };
    }

    changeName(e) {
        this.setState({
            name: e.target.value
        });
        console.log(this.state.show, this.state.name, this.state.text, this.state.id);
    }

    handleSubmit() {
        if (this.state.name === "") {
            alert("The name can't be blank!");
        }
        else if (this.state.name.length > 40) {
            alert("The name cannot exceed 40 characters!");
        }
        else if (this.props.saved.hasOwnProperty(this.state.name)) {
            alert(`${this.state.name} has already been used!`)
        }
        else {
            this.setState({
                show: false
            });
            this.props.eventSaveCards(
                this.state.name,
                this.props.cards
            );
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
                    id="SaveCardsButton"
                    onClick={() => this.handleShow()}
                >
                    <i className="fas fa-save"></i>
                </button>

                <Modal show={this.state.show} onHide={this.handleClose} centered>
                    <Modal.Header>
                        <Modal.Title>What should this collection be called?</Modal.Title>
                        <i className="fas fa-times" onClick={() => this.handleClose()}></i>
                    </Modal.Header>
                    <Modal.Body>
                        <input type="text"
                            placeholder="Name goes here"
                            onChange={(e) => this.changeName(e)}
                            className="modalInput"
                        />
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
        eventSaveCards: (name, cards) => dispatch(actionSaveCards(name, cards))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SaveCardsModal);