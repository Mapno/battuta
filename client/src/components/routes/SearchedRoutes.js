import React from 'react';
import RouteCard from './RouteCard';

class SearchedRoutes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.data
        }
    }

    render() {
        const { data } = this.state
        return (
            <div>
                {data.map(e => <RouteCard route={e} key={e._id}></RouteCard>)}
            </div>
        )
    }
}

export default SearchedRoutes;