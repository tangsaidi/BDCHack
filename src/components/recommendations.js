import React, { Component } from 'react';
import "./recommendations.css";
import Card from "./recommendation_card";

class Recommendations extends Component{
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            error: false,
            car_id_list: [5741337, 5764741, 5791398]
        };
    }

    refresh() {
        fetch(`http://0.0.0.0:5000/api/v1/similar/${this.props.car_id}`)
            .then(res => {
                if (!res.ok)
                    return {indices: []};
                else
                    return res.json();
            })
            .then(data => {
                this.setState({car_id_list: data.indices});
            });
    }

    componentDidMount() {
        // this.refresh();
    }

    render() {
        const cards = this.state.car_id_list.map(id => <Card car_id={id} key={`${id}`}/>);

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
}

export default Recommendations;