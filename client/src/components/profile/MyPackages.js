import React from 'react';
import RouteService from '../routes/RouteService';
import PackageCard from './PackageCard';

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
        if (Object.keys(packages).length > 0)
            return (
                <div>
                    <PackageCard packages={packages}></PackageCard>
                </div>
            )
        else
            return (
                <div>no pakcages bro</div>
            )
    }
}

export default MyPackages;