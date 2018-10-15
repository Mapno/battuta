import React, { Component } from 'react';
import LocationSearchInput from '../search/LocationSearchInput'
import DateInput from '../search/DateInput';
import RouteService from '../routes/RouteService';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            departure: {},
            arrival: {},
            date: {}
        }
        this.service = new RouteService()
    }

    handleSelect = (latLng, departure, address) => {
        departure ? this.setState({ departure: { ...latLng, address } }) : this.setState({ arrival: { ...latLng, address } })
    };

    resetClick = (departure) => {
        departure ? this.setState({departure: {}}) : this.setState({arrival: {}})
    };

    handleDate = (date) => {
        this.setState({ date: date._d })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { departure, arrival, date } = this.state;
        this.service.search(arrival, departure, date)
        .then(e => console.log(e))

    }

    render() {
        return (
            <div className="d-flex justify-content-center aling-items-center search-container">
                <div className="my-4 d-flex flex-row justify-content-between align-items-center row container-fluid col-10">
                    <div className="col-4 d-flex flex-column justify-content-between align-items-center">
                        <span className="my-2 location-info">Departure</span>
                        <LocationSearchInput handleSelect={this.handleSelect} departure={true} resetClick={this.resetClick} place={this.state.departure}></LocationSearchInput>
                    </div>
                    <div className="col-4 d-flex flex-column justify-content-between align-items-center">
                        <span className="my-2 location-info">Arrival</span>
                        <LocationSearchInput handleSelect={this.handleSelect} departure={false} resetClick={this.resetClick} place={this.state.arrival}></LocationSearchInput>
                    </div>
                    <div className="col-3 d-flex flex-column justify-content-between align-items-center">
                        <span className="my-2 location-info">Date</span>
                        <DateInput handleDate={this.handleDate}></DateInput>
                    </div>
                    <form className="col-1 d-flex flex-column justify-content-between align-items-center mt-5" onSubmit={this.handleSubmit}>
                        <button className="btn btn-dark">Search</button>
                    </form>
                </div>
            </div>
        );
    };
};

export default HomePage;