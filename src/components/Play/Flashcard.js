import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../styles/Board.css";

class Flashcard extends React.Component {

    render() {
        var flashCardInnerClass = "flashCardInner";
        if (this.props.isFlipped) {
            flashCardInnerClass += " flipped";
        }
        if (this.props.type === "word") {
            return (
                <Col className="flashCard" onClick={this.props.pickCard}>
                    <div className={flashCardInnerClass}>
                        <div className="flashCardBack">
                            <h4>Flashify</h4>
                        </div>
                        <div className="flashCardFront"><h5>{this.props.value}</h5></div>
                    </div>
                </Col>
            );
        }
        else {
            return (
                <Col className="flashCard" onClick={this.props.pickCard}>
                    <div className={flashCardInnerClass}>
                        <div className="flashCardBack">
                            <h4>Flashify</h4>
                        </div>
                        <div className="flashCardFront"><p>{this.props.value}</p></div>
                    </div>
                </Col>
            )
        }
    }
}

export default Flashcard;