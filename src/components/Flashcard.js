import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/board.css";

class Flashcard extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div className="flashCard" onClick={this.props.pickCard}>
                <div className={flashCardInnerClass}>
                    <div className="flashCardBack">
                        <img
                            src="https://www.digitalcrafts.com/img/DigitalCrafts-Logo-Wrench.png" 
                            alt=""
                        />
                    </div>
                    <div className="flashCardFront">{this.props.front}</div>
                </div>
            </div>
        );
    }
}

export default Flashcard;