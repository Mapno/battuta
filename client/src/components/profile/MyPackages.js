import React from 'react';
import RouteService from '../routes/RouteService';
import PackageCard from './PackageCard';
import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';


class MyPackages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: props.user,
            packages: {
                asOwner: [],
                asReceiver: [],
                asShipper: []
            },
            refresh: false
        }
        this.service = new RouteService();
    }

    findPackages = () => {
        const { user } = this.state;
        const refresh = !this.state.refresh;
        this.service.find(user)
            .then(packages => this.setState({ packages, refresh }))
    }

    componentDidMount() {
        this.findPackages()
    }

    render() {
        const { packages, refresh } = this.state;
        if (packages['asOwner'].length > 0 || packages['asShipper'].length > 0 || packages['asReceiver'].length > 0)
            return (
                <div className="my-packages">
                    <Grid
                        container
                        alignItems="center"
                        justify="center"
                    >
                        <PackageCard packages={packages} findPackages={this.findPackages} refresh={refresh}></PackageCard>
                    </Grid>
                </div>
            )
        else
            return (
                <div className="my-packages">

                    <Grid container justify="center" className="py-5">
                        <h5>You have no shipments so far.<br />Search for a route to start enjoying Battuta!</h5>
                    </Grid>
                </div>
            )
    }
}

export default MyPackages;