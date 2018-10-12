import React, { Component } from 'react';
import LocationSearchInput from '../search/LocationSearchInput'

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            departure: {},
            arrival: {}
        }
    }

    handleSelect = (latLng, departure, address) => {
        departure ? this.setState({ departure: { ...latLng, address } }) : this.setState({ arrival: { ...latLng, address } })
    }

    resetClick = (departure) => {
        departure ? this.setState({departure: {}}) : this.setState({arrival: {}})
    }

    render() {
        return (
            <div className="d-flex justify-content-center aling-items-center search-container">
                <div className="my-4 d-flex flex-row justify-content-between align-items-center row container">
                    <div className="col-4 d-flex flex-column justify-content-between align-items-center">
                        <span className="my-2 location-info">Departure</span>
                        <LocationSearchInput handleSelect={this.handleSelect} departure={true} resetClick={this.resetClick}></LocationSearchInput>
                    </div>
                    <div className="col-4 d-flex flex-column justify-content-between align-items-center">
                        <span className="my-2 location-info">Arrival</span>
                        <LocationSearchInput handleSelect={this.handleSelect} departure={false} resetClick={this.resetClick}></LocationSearchInput>
                    </div>
                    <div className="col-2 d-flex flex-column justify-content-between align-items-center">
                        <span className="my-2 location-info">Date</span>
                        <LocationSearchInput handleSelect={this.handleSelect} departure={false}></LocationSearchInput>
                    </div>
                    <div className="col-1 d-flex flex-column justify-content-between align-items-center mt-5">
                        <button className="btn btn-dark">Search</button>
                    </div>
                </div>
            </div>
        );
    };
};

export default HomePage;