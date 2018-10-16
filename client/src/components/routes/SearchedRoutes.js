import React from 'react';
import RouteCard from './RouteCard';
import NewShipment from './NewShipment';

class SearchedRoutes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{
                arrival: {
                    location: {
                        coordinates: [37.261421, -6.944722400000046],
                        type: "Point"
                    },
                    name: "Huelva, Spain"
                },
                aviableSpace: 2,
                departure: {
                    location: {
                        coordinates: [40.4167754, -3.7037901999999576],
                        type: "Point"
                    },
                    name: "Madrid, Spain"
                },
                driver: { _id: "5bc373c5f44c230a6733f24a", username: "Mapno" },
                departureTime: '2018-10-25 17:45:55.000'
            }],
            redirect: false,
            selectedRoute: {}
        }
    }

    handleBook = (route) => {
        this.setState({ selectedRoute: route })
        this.setState({ redirect: true });
    };

    render() {
        const { data } = this.state
        if (this.state.redirect)
            return (<NewShipment></NewShipment>)
        else
            return (
                <div className="d-flex flex-column align-items-center justify-content-center mx-5">
                    <h3 className="mt-3">Routes</h3>
                    {data.map(e => <RouteCard route={e} key={e.driver._id} user={this.props.user} handleBook={this.handleBook}></RouteCard>)}
                </div>
            )
    }
}

export default SearchedRoutes;