import React from 'react';
import RouteService from '../routes/RouteService';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

class PackageCard extends React.Component {
    constructor() {
        super();
        this.service = new RouteService();
    }

    handleAccept(value) {
        this.service.accept(value)
            .then(() => this.props.findPackages())
    }

    render() {
        const { packages } = this.props
        return (
            <Grid style={{ marginBottom: "4vh" }} >
                {Object.keys(packages).map(key => {
                    return packages[key].length > 0 ? <div key={key}>
                        <Grid style={{ marginTop: "6vh" }}>
                            <h3>{key === 'asOwner' ? 'Sent Packages' : key === 'asShipper' ? 'Shipments' : 'Received Packages'}</h3>
                            <Paper>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell data-field="id">Departure</TableCell>
                                            <TableCell data-field="name">Destination</TableCell>
                                            <TableCell data-field="price">Item</TableCell>
                                            <TableCell data-field="date">Date</TableCell>
                                            <TableCell data-field="time">Time of departure</TableCell>
                                            <TableCell data-field="owner">Owner</TableCell>
                                            <TableCell data-field="receiver">Receiver</TableCell>
                                            <TableCell data-field="shipper">Shipper</TableCell>
                                            <TableCell data-field="shipper">Status</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    {packages[key].map(shipment => {
                                        return <TableBody key={shipment._id}>
                                            <TableRow>
                                                <TableCell>{shipment.route.departure.name}</TableCell>
                                                <TableCell>{shipment.route.arrival.name}</TableCell>
                                                <TableCell>{shipment.description}</TableCell>
                                                <TableCell>{shipment.route.departureTime.split('').splice(0, 10).join('').split('-').sort(() => 1).join('-')}</TableCell>
                                                <TableCell>{shipment.route.departureTime.split('').splice(11, 5).join('')}</TableCell>
                                                <TableCell>{shipment.owner.username}</TableCell>
                                                <TableCell>{shipment.receiver.username}</TableCell>
                                                <TableCell>{shipment.carrier.username}</TableCell>
                                                <TableCell>{shipment.status}</TableCell>
                                                {key === 'asShipper' && shipment.status === 'Pending' ?
                                                    <Button
                                                        variant="contained"
                                                        color="primary"
                                                        style={{ marginTop: "0.5vh" }}
                                                        onClick={(event) => this.handleAccept(event.currentTarget.value)}
                                                        value={shipment._id}>Accept shimpent</Button> : null}
                                            </TableRow>
                                        </TableBody>
                                    })}
                                </Table>
                            </Paper>
                        </Grid>
                    </div> : <div key={key}></div>;
                })}
            </Grid>
        )
    }
}

export default PackageCard;