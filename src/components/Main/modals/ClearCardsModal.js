import React from 'react';
import { Modal, Button } from "react-bootstrap";
import { connect } from "react-redux";
import actionClearCards from "../../../actions/actionClearCards";
import "../../../styles/Main.css";

class ClearCardsModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false
        };
    }

    handleConfirm() {
        this.props.eventClearCards();
        this.setState({
            show: false
        });
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
                    id="ClearCardsButton"
                    onClick={() => this.handleShow()}
                >
                    <i className="fas fa-times"></i>
                </button>

                <Modal show={this.state.show} onHide={this.handleClose} centered>
                    <Modal.Header>
                        <Modal.Title>Clear Cards</Modal.Title>
                        <i className="fas fa-times modalDismiss" onClick={() => this.handleClose()}></i>
                    </Modal.Header>
                    <Modal.Body>
                        Are you sure you want to clear all cards in this tab? Collections will still be saved.
                </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={() => this.handleConfirm()}>
                            Confirm
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
        eventClearCards: () => dispatch(actionClearCards())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ClearCardsModal);