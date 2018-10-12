import React from 'react';
import LocationSearchInput from '../search/LocationSearchInput';
import MapContainer from './MapContainer';

export class CreateRoute extends React.Component {
    constructor() {
        super();
        this.state = {
            arrival: {},
            departure: {},
            date: {},
            waypoints: []
        };
    };

    handleSelect = (latLng, departure, address) => {
        departure ? this.setState({ departure: { ...latLng, address } }) : this.setState({ arrival: { ...latLng, address } });
    }

    resetClick = (departure) => {
        departure ? this.setState({departure: {}}) : this.setState({arrival: {}})
    }

    render() {
        return (
            <div className="d-flex justify-content-center aling-items-center create-container">
                <div className="my-4 d-flex flex-row justify-content-between align-items-center row container border">
                    <div className="d-flex flex-column justify-content-center align-items-center border col-md-6 px-5 pb-5">
                        <div className="d-flex flex-column justify-content-center align-items-center container my-5" style={{ zIndex: 3 }}>
                            <span className="my-2 location-info">Departure</span>
                            <LocationSearchInput handleSelect={this.handleSelect} departure={true} resetClick={this.resetClick}></LocationSearchInput>
                        </div>
                        <div className="d-flex flex-column justify-content-center align-items-center container" style={{ zIndex: 2 }}>
                            <span className="my-2 location-info">Arrival</span>
                            <LocationSearchInput handleSelect={this.handleSelect} departure={false} resetClick={this.resetClick}></LocationSearchInput>
                        </div>
                    </div>
                    <MapContainer {...this.state}></MapContainer>
                </div>
            </div>
        );
    };
};