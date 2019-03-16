import React, { Component } from 'react';
import Button from "react-bootstrap/Button";
import "./recommendations.css";

class Recommendations extends Component{
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            error: false,
            car_id_list: []
        };
    }

    refresh() {
        const similar = fetch("0.0.0.0:5000/api/v1/similar/car_id").then(res => {
            console.log(res);
            if (!res.ok)
                return {};
            return res.json();
        });
        const list = Object.keys(similar);

        this.setState({car_id_list: list});
    }

    componentDidMount() {
        this.refresh();
    }

    render() {
        const cards = this.state.car_id_list.map(id => {
            return (
                <div className="card card-body p-0" key={`${id}`}>
                    <img height="40%" src="no.jpg"/>
                    <div className="m-3">
                        <h6>Car Name</h6>
                        <p>descriptions</p>
                        <Button variant="primary" onClick={() => this.props.change_car(id)}>See more</Button>
                    </div>
                </div>
            );
        });

        return (
            <div className="m-5 text-left">
                <h6>Recommendations</h6>
                <div className="container-fluid">
                    <div className="d-flex flex-row flex-nowrap overflow-auto">
                        {cards}
                    </div>
                </div>
            </div>
        );
    }
};

export default Recommendations;