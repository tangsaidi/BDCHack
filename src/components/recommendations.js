import React, { Component } from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {connect} from "react-refetch";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./recommendations.css";

const Recommendations = (props) => {
    const cards = props.car_id_list.map(id => {
        return (
            <div className="card card-body p-0" key={`${id}`}>
                <img height="40%" src="no.jpg"/>
                <div className="m-3">
                    <h6>Car Name</h6>
                    <p>descriptions</p>
                    <Button variant="primary" onClick={() => props.change_car(id)}>See more</Button>
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
};

export default Recommendations;