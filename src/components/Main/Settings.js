import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import "../../styles/Main.css";

class Settings extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <Row id="SettingsContainer">
                Settings Component
            </Row>
        );
    }
}

export default Settings;