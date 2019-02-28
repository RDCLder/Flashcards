import React from 'react';
import { Tabs, Tab, Container, Row, Col } from "react-bootstrap";
import AddCard from "./AddCard";
import Saved from "./Saved";
import Settings from "./Settings";
import "../styles/Main.css";

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
                >
                    <Tab eventKey="cards" title="Add Card">
                        <AddCard />
                    </Tab>
                    <Tab eventKey="saved" title="Saved">
                        <Saved />
                    </Tab>
                    <Tab eventKey="settings" title="Settings">
                        <Settings />
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}

export default Main;