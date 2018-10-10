import React, { Component } from 'react';
import LocationSearchInput from '../search/LocationSearchInput'

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <div className="d-flex justify-content-center">
                <div className="col-md-6 my-4">
                    <LocationSearchInput></LocationSearchInput>
                </div>
            </div>
        );
    };
};

export default HomePage;