import React from 'react';
import RouteCard from './RouteCard';
import NewShipment from './NewShipment';

class SearchedRoutes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
            redirect: false,
            selectedRoute: {}
        }
    }

    handleBook = (route) => {
        this.setState({ selectedRoute: route.route })
        this.setState({ redirect: true });
    };

    render() {
        const { data } = this.state
        if (this.state.redirect)
            return (<NewShipment selectedRoute={this.state.selectedRoute} user={this.props.user}></NewShipment>)
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