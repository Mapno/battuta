import React, { Component } from 'react';
import LocationSearchInput from '../search/LocationSearchInput'
import DateInput from '../search/DateInput';
import RouteService from '../routes/RouteService';
import SearchedRoutes from '../routes/SearchedRoutes';
import Button from '@material-ui/core/Button';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            departure: {},
            arrival: {},
            date: {},
            render: false,
            data: {}
        }
        this.service = new RouteService()
    }

    handleSelect = (latLng, departure, address) => {
        departure ? this.setState({ departure: { ...latLng, address } }) : this.setState({ arrival: { ...latLng, address } })
    };

    resetClick = (departure) => {
        departure ? this.setState({ departure: {} }) : this.setState({ arrival: {} })
    };

    handleDate = (date) => {
        this.setState({ date: date._d })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { departure, arrival, date } = this.state;
        this.service.search(arrival, departure, date)
            .then(data => this.setState({ data }))
            .then(() => this.setState({ render: true }))
            .catch(e => console.log(e));
    };

    render() {
        if (this.state.render)
            return (<SearchedRoutes data={this.state.data} user={this.props.user}></SearchedRoutes>)
        else
            return (
                <div className="d-flex justify-content-center aling-items-center search-container home-page">
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
                        <div className="col-1 d-flex flex-column justify-content-between align-items-center mt-5">
                            <Button color="primary" variant="contained" onClick={this.handleSubmit}>Search</Button>
                        </div>
                    </div>
                </div>
            );
    };
};

export default HomePage;