import React from 'react';
import { Tabs, Tab, Container, Row, Col } from "react-bootstrap";
import AddCard from "./AddCard";
import Saved from "./Saved";
import Settings from "./Settings";
import "../../styles/Main.css";

// This will be the front page in which users can upload info for flashcards and adjust settings
// The saved/settings page will have saved flashcards that display here
// Maybe have different play modes like memory game, multiple choice, crossword puzzles, etc.
// For now, focus on memory game and regular flash card mode (can turn around)

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            key: "cards"
        }
    }

    render() {
        return (
            <Container id="MainContainer">
                <Tabs
                    id="MainTabs"
                    activeKey={this.state.key}
                    onSelect={key => this.setState({ key })}
                    variant="pills"
                >
                    <Tab eventKey="cards" title="CARDS">
                        <Row className="separator"></Row>
                        <AddCard />
                    </Tab>
                    <Tab eventKey="saved" title="SAVED">
                        <Row className="separator"></Row>
                        <Saved />
                    </Tab>
                    <Tab eventKey="settings" title="SETTINGS">
                        <Row className="separator"></Row>
                        <Settings />
                    </Tab>
                </Tabs>

                {/* Top Button */}
                <a href="/#">
                    <button type="button"
                        className="btn floatButton"
                        id="topButton"
                    >
                        <i className="fas fa-arrow-up"></i>
                    </button>
                </a>
            </Container>
        );
    }
}

export default Main;