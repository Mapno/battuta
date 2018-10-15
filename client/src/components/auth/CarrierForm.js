import React, { Component } from 'react';

class CarrierForm extends Component {

    handleChange = (event) => {
        this.props.handleChange(event);
    }

    render() {
        return (
            <div>
                <h4>Your vehicle</h4>
                <div className="d-flex flex-row my-3 justify-content-around">
                    <label className="signup-label">Brand</label>
                    <input type="text" name="brand" value={this.props.brand} onChange={e => this.handleChange(e)}></input>
                </div>
                <div className="d-flex flex-row my-3 justify-content-around">
                    <label className="signup-label">Model</label>
                    <input type="text" name="model" value={this.props.model} onChange={e => this.handleChange(e)}></input>
                </div>
                <div className="d-flex flex-row my-3 justify-content-around">
                    <label className="signup-label">Color</label>
                    <input type="text" name="color" value={this.props.color} onChange={e => this.handleChange(e)}></input>
                </div>
                <div className="d-flex flex-row my-3 justify-content-around">
                    <label className="signup-label">Registration Number</label>
                    <input type="text" name="registration" value={this.props.registration} onChange={e => this.handleChange(e)} maxLength="7"></input>
                </div>
            </div>
        );
    };
};

export default CarrierForm;