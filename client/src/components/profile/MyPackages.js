import React from 'react';
import RouteService from '../routes/RouteService';

class MyPackages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: props.user,
            packages: []
        }
        this.service = new RouteService();
    }

    componentDidMount() {
        const { user } = this.state
        this.service.find(user)
            .then(packages => this.setState({ packages }))
    }

    render() {
        const { packages } = this.state
        console.log(packages)
        if (packages.length > 0)
            return (
                <div>
                    {packages.map(shipment => <p>{shipment._id}</p>)}
                </div>
            )
        else
            return (
                <div>no pakcages bro</div>
            )
    }
}

export default MyPackages;