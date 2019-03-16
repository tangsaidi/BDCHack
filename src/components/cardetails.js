import React, { Component } from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {connect} from "react-refetch";
import Nav from "react-bootstrap/Nav";

class CarDetails extends Component {
    render() {
        const req = this.props.car_req;

        if (req.pending)
            return <label>loading</label>;
        else if (!req.fulfilled)
            return <label>{req.reason.message}</label>;
        else {
            const car = req.value;
            return (
                <div>
                    <Row>
                        <img width="100%" src={car.car_ext_photo_url1} alt="car"/>
                    </Row>
                    <Row>
                        <Col>
                            <Stats/>
                        </Col>
                    </Row>
                </div>
            );
        }
    }
}

export default connect(props => ({
    car_req: `http://0.0.0.0:5000/api/v1/car_info/${props.car_id}`
}))(CarDetails);

class Stats extends Component {
    constructor(props) {
        super(props);
        this.state = {route: "stats"};
    }

    nav_change = (key) => {
        this.setState({route: key});
    };

    render() {
        let display;
        switch (this.state.route) {
            case "features":
                display = <div>mock display</div>;
                break;
            case "stats1":
                display = <div>mock display 1</div>;
                break;
            default:
                display = <div>wrong route</div>;
        }

        return (
            <div>
                <StatsNav onSelect={this.nav_change}/>
                {display}
            </div>
        );
    }
}

const StatsNav = (props) => {
    return (
        <Nav variant="pills" defaultActiveKey="features" fill="true">
            <Nav.Item>
                <Nav.Link eventKey="features" onSelect={props.onSelect}>Features</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1" onSelect={props.onSelect}>More Stats</Nav.Link>
            </Nav.Item>
        </Nav>
    );
};