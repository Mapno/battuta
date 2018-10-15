import React from 'react';
import LocationSearchInput from '../search/LocationSearchInput';
import MapContainer from './MapContainer';
import DateInput from '../search/DateInput';
import RouteService from './RouteService';

export class CreateRoute extends React.Component {
    constructor() {
        super();
        this.state = {
            arrival: {},
            departure: {},
            date: {},
            // waypoints: []
            carrierForm: false,
            space: 0
        };
        this.service = new RouteService();
    };

    handleSelect = (latLng, departure, address) => {
        departure ? this.setState({ departure: { ...latLng, address } }) : this.setState({ arrival: { ...latLng, address } });
    };

    resetClick = (departure) => {
        departure ? this.setState({ departure: {} }) : this.setState({ arrival: {} })
    };

    forwardClick = () => {
        this.setState({ carrierForm: true })
    };

    backwardClick = () => {
        this.setState({ carrierForm: false })
    };

    handleDate = (date) => {
        this.setState({ date: date._d })
    };

    handleSpace(space) {
        if(typeof space === Number)
            this.setState({ space })
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const {arrival, departure, date, space} = this.state;
        this.service.create(arrival, departure, date, space)
        .then(e => console.log(e))

    }

    render() {
        // let waypointsForm;
        // if( !_.isEqual(this.props.arrival, {}) && !_.isEqual(this.props.departure, {})) waypointsForm = <WaypointsForm></WaypointsForm>
        if (this.state.carrierForm) {
            return (
                <div className="d-flex justify-content-center aling-items-center create-container" onSubmit={this.handleSubmit}>
                    <form className="my-4 d-flex flex-row justify-content-between align-items-center row container border">
                        <div className="d-flex flex-column justify-content-center align-items-center border col-md-6 px-5 pb-5">
                            <div className="d-flex flex-column justify-content-start align-items-center container my-5">
                                <span className="my-2 location-info">Departure date &amp; time</span>
                                <DateInput handleDate={this.handleDate}></DateInput>
                            </div>
                            <div className="d-flex flex-column justify-content-center align-items-center container-fluid my-5">
                                <span className="my-2 location-info">Available space</span>
                                <div className="d-flex flex-row justify-content-center align-items-center space-wrapper">
                                    <input type="text" placeholder="meters" id="space" onChange={e => this.handleSpace(e.currentTarget.value)} />
                                    <input type="text" id="spacetwo" value="m²" disabled />
                                </div>
                            </div>
                            <div className="d-flex flex-row justify-content-between">
                                <div className="col-1 d-flex flex-column justify-content-between align-items-center mt-5">
                                    <button className="btn btn-light" onClick={this.backwardClick}>Back</button>
                                </div>
                                <div className="col-1 d-flex flex-column justify-content-between align-items-center mt-5">
                                    <button className="btn btn-dark" type="submit">Submit</button>
                                </div>
                            </div>
                        </div>
                        <MapContainer {...this.state}></MapContainer>
                    </form>
                </div>
            )
        } else {
            return (
                <div className="d-flex justify-content-center aling-items-center create-container">
                    <div className="my-4 d-flex flex-row justify-content-between align-items-center row container border">
                        <div className="d-flex flex-column justify-content-center align-items-center border col-md-6 px-5 pb-5">
                            <div className="d-flex flex-column justify-content-center align-items-center container my-5" style={{ zIndex: 3 }}>
                                <span className="my-2 location-info">Departure</span>
                                <LocationSearchInput handleSelect={this.handleSelect} departure={true} resetClick={this.resetClick} place={this.state.departure}></LocationSearchInput>
                            </div>
                            <div className="d-flex flex-column justify-content-center align-items-center container" style={{ zIndex: 2 }}>
                                <span className="my-2 location-info">Arrival</span>
                                <LocationSearchInput handleSelect={this.handleSelect} departure={false} resetClick={this.resetClick} place={this.state.arrival}></LocationSearchInput>
                            </div>
                            {/* {waypointsForm} */}
                            <div className="container-fluid d-flex justify-content-end">
                                <div className="col-1 d-flex flex-column justify-content-between align-items-center mt-5">
                                    <button className="btn btn-dark" onClick={this.forwardClick}>Continue</button>
                                </div>
                            </div>
                        </div>
                        <MapContainer {...this.state}></MapContainer>
                    </div>
                </div>
            );
        }
    };
};