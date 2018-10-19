import React from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

class RouteCard extends React.Component {

    render() {
        const route = this.props
        const { arrival, departure, aviableSpace, driver, departureTime, price } = this.props.route;
        const date = departureTime.split('').splice(0, 10).join('').split('-').sort(() => 1).join('-')
        const time = departureTime.split('').splice(11, 5).join('')
        return (
            <Grid container align="center" justify="center">
                <Paper>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Driver:</TableCell>
                                <TableCell>From:</TableCell>
                                <TableCell>To:</TableCell>
                                <TableCell>Departure date:</TableCell>
                                <TableCell>Departure time:</TableCell>
                                <TableCell>Price:</TableCell>
                                <TableCell>Aviable Space:</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>{driver.username}</TableCell>
                                <TableCell>{departure.name}</TableCell>
                                <TableCell>{arrival.name}</TableCell>
                                <TableCell>{date}</TableCell>
                                <TableCell>{time}</TableCell>
                                <TableCell>{price}</TableCell>
                                <TableCell>{aviableSpace}</TableCell>
                                <TableCell><Button onClick={() => this.props.handleBook(route)} color="primary" variant="contained">Book shipment</Button></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Paper>
            </Grid>
        );
    }
}

export default RouteCard;
