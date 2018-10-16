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
        this.setState({ selectedRoute: route })
        this.setState({ redirect: true });
    };

    render() {
        const { data } = this.state
        if (this.state.redirect)
            return (<NewShipment></NewShipment>)
        else
            return (
                <div>
                    {data.map(e => <RouteCard route={e} key={e._id} user={this.props.user} handleBook={this.handleBook}></RouteCard>)}
                </div>
            )
    }
}

export default SearchedRoutes;