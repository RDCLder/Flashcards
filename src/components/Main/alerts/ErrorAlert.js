import React from 'react';
import "../../../styles/Main.css";

class AlertDismissable extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            show: true
        };
    }

    render() {
        const handleHide = () => this.setState({ show: false });
        const handleShow = () => this.setState({ show: true });
        
        if (this.props.type === "success") {

        }
        else if (this.props.type === "error") {
        return (
            <>
                <Alert show={this.state.show} variant="success">
                    <Alert.Heading>How's it going?!</Alert.Heading>
                    <p>
                        
                    </p>
                    <hr />
                    <div className="d-flex justify-content-end">
                        <Button onClick={handleHide} variant="outline-success">
                            Close me ya'll!
                        </Button>
                    </div>
                </Alert>

                {!this.state.show && <Button onClick={handleShow}>Show Alert</Button>}
            </>
        );
        }
    }
}

render(<AlertDismissable />);