import React, { Component } from 'react';
import Switch from "react-switch";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import CarDetails from "./cardetails";
import Recommendations from "./recommendations";

export default class Browse extends Component {
    constructor(props) {
        super(props);

        this.state = {
            magic: false,
            car_id: 5204244
        };
    }

    magic_switch = (on) => {
        this.setState({magic: on});
    };

    change_car = car_id => {
        this.setState({car_id: car_id});

        const res = fetch(`0.0.0.0:5000/api/v1/log/00000000/${car_id}`).then();
    };

    render() {
        console.log(this.state.car_id);
        return (
            <div>
                <Container>
                    <Row className="justify-content-center">
                        <MagicSwitch
                            on={this.state.magic}
                            magic_switch={this.magic_switch}
                        />
                    </Row>
                    <Row>
                        <CarDetails car_id={this.state.car_id}/>
                    </Row>
                </Container>
                <Recommendations car_id_list={[0, 1, 2, 3, 4, 5, 6]} change_car={this.change_car}/>
            </div>
        );
    }
}

const MagicSwitch = (props) => {
    return (
        <div className="p-2">
            <span className="align-middle">Magic Switch</span>
            <Switch
                className="align-middle ml-2"
                onChange={(on) => {props.magic_switch(on)}}
                checked={props.on}
            />
        </div>
    );
};