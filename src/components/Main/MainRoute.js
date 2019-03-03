import React from 'react';
import { Tabs, Tab, Container } from "react-bootstrap";
import AddCard from "./AddCard";
import Saved from "./Saved";
import Settings from "./Settings";
import "../../styles/Main.css";

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
                    <Tab eventKey="cards" title="CARDS">
                        <AddCard />
                    </Tab>
                    <Tab eventKey="saved" title="SAVED">
                        <Saved />
                    </Tab>
                    <Tab eventKey="settings" title="SETTINGS">
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