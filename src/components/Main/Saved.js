import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import Collection from "./modals/Collection";
import actionDeleteSavedCard from "../../actions/actionDeleteSavedCard";
import actionDeleteCollection from "../../actions/actionDeleteCollection";
import "../../styles/Main.css";

class Saved extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <Row id="SavedContainer">
                {Object.keys(this.props.saved).map((key) => {
                    return <Collection key={key} name={key} />
                })}
            </Row>
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

export default connect(mapStateToProps, mapDispatchToProps)(Saved);