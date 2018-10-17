import React from 'react';
import RouteService from '../routes/RouteService';
import PackageCard from './PackageCard';
import Grid from '@material-ui/core/Grid';

class MyPackages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: props.user,
            packages: {
                asOwner: [],
                asReceiver: [],
                asShipper: []
            }
        }
        this.service = new RouteService();
    }

    findPackages = () => {
        const { user } = this.state
        this.service.find(user)
            .then(packages => this.setState({ packages }))
    }

    componentDidMount() {
        this.findPackages()
    }

    render() {
        const { packages } = this.state;
        if (packages['asOwner'].length > 0 || packages['asShipper'].length > 0 || packages['asReceiver'].length > 0)
            return (
                <Grid
                container
                alignItems="center"
                justify="center"
                >
                    <PackageCard packages={packages} findPackages={this.findPackages}></PackageCard>
                </Grid>
            )
        else
            return (
                <div>no pakcages bro</div>
            )
    }
}

export default MyPackages;