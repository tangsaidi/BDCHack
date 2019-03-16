import React from 'react';
import "./recommendations.css";
import {connect} from "react-refetch";
import Button from "./recommendations";

const Card = (props) => {
    console.log(props.car_req);
    const req = props.car_req;

    if (req.pending)
        return <label>loading</label>;
    else if (!req.fulfilled)
        return <label>{req.reason.message}</label>;
    else {
        const car = req.value;
        return (
            <div className="card card-body p-0" key={`${props.car_id}`}>
                <img height="40%" src={car.car_ext_photo_url1} alt="car"/>
                <div className="m-3">
                    <h6>{`${car.model} ${car.make}`}</h6>
                    <p>{car.note}</p>
                    <Button variant="primary" onClick={() => this.props.change_car(props.car_id)}>See more</Button>
                </div>
            </div>
        );
    }
};

export default connect(props => ({
    car_req: `http://0.0.0.0:5000/api/v1/car_info/${props.car_id}`
}))(Card);