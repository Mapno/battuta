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

    handleSelect = (latLng, departure) => {
        departure ? this.setState({departure: latLng}) : this.setState({arrival: latLng})
    }

    render() {
        return(
            <div className="d-flex justify-content-center">
                <div className="col-md-6 my-4">
                    <LocationSearchInput handleSelect={this.handleSelect} departure={true}></LocationSearchInput>
                    <LocationSearchInput handleSelect={this.handleSelect} departure={false}></LocationSearchInput>
                </div>
            </div>
        );
    };
};

export default HomePage;