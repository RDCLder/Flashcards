import React from 'react';
import { Modal, Button, Alert } from "react-bootstrap";
import { connect } from "react-redux";
import actionSaveCards from "../../../actions/actionSaveCards";
import "../../../styles/Main.css";

class SaveCardsModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            alertMessage: "",
            alertSuccessShow: false,
            alertErrorShow: false,
        };
    }

    changeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    handleSubmit() {
        if (this.state.name === "") {
            this.setState({alertMessage: "The name can't be blank!"});
            this.setState({alertErrorShow: true});
            setTimeout(() => {
                this.setState({ alertErrorShow: false });
            }, 3000);
        }
        else if (this.state.name.length > 40) {
            this.setState({alertMessage: "The name cannot exceed 40 characters!"});
            this.setState({alertErrorShow: true});
            setTimeout(() => {
                this.setState({ alertErrorShow: false });
            }, 3000);
        }
        else {
            this.setState({
                show: false
            });
            this.props.eventSaveCards(
                this.state.name,
                this.props.cards
            );
            if (this.props.saved.hasOwnProperty(this.state.name)) {
                this.setState({alertMessage: `${this.state.name} has been overwritten!`});
                this.setState({alertSuccessShow: true});
                setTimeout(() => {
                    this.setState({ alertSuccessShow: false });
                }, 3000);
            }
            else {
                this.setState({alertMessage: `${this.state.name} has been saved successfully!`});
                this.setState({alertSuccessShow: true});
                setTimeout(() => {
                    this.setState({ alertSuccessShow: false });
                }, 3000);
            }
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
                        <Modal.Title>Save As Collection</Modal.Title>
                        <i className="fas fa-times" onClick={() => this.handleClose()}></i>
                    </Modal.Header>
                    <Modal.Body>
                        <h5>Collection Name</h5>
                        <textarea type="text"
                            placeholder="Name goes here"
                            rows="1"
                            onChange={(e) => this.changeName(e)}
                            className="p-1"
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

                <Alert variant="success"
                    show={this.state.alertSuccessShow}
                    className="alert"
                >
                    <Alert.Heading>
                        Success
                        <i className="fas fa-times alertDismiss"
                            onClick={() => this.setState({ alertSuccessShow: false })}
                        />
                    </Alert.Heading>
                    <p>{this.state.alertMessage}</p>
                </Alert>

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
        eventSaveCards: (name, cards) => dispatch(actionSaveCards(name, cards))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SaveCardsModal);