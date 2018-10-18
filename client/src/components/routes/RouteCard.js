import React from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

class RouteCard extends React.Component {

    render() {
        const route = this.props
        const { arrival, departure, aviableSpace, driver, departureTime } = this.props.route;
        const date = departureTime.split('').splice(0, 10).join('').split('-').sort(() => 1).join('-')
        const time = departureTime.split('').splice(11, 5).join('')
        return (
            <div className="d-flex flex-row row border-bottom border-secondary mb-5 py-5 container-fluid">
                <div className="d-flex flex-column justify-content-start align-items-center col-2">
                    <div className="d-flex justify-content-center border-bottom mb-4">
                        <h4>Driver</h4>
                    </div>
                    <div className="d-flex flex-row justify-content-around aling-items-center row container-fluid">
                        <span>Name: {driver.username}</span>
                    </div>
                </div>
                <div className="d-flex flex-column justify-content-around align-items-center col-7 ">
                    <div className="d-flex justify-content-center border-bottom mb-4">
                        <h4>Shipment</h4>
                    </div>
                    <div className="d-flex flex-row justify-content-around aling-items-center row container-fluid border-right border-left">
                        <div className="d-flex flex-column justify-content-around col-4">
                            <span>From:</span>
                            <span>To:</span>
                            <span>Departure date:</span>
                            <span>Departure time:</span>
                            <span>Price:</span>
                            <span>Aviable Space:</span>
                        </div>
                        <div className="d-flex flex-column justify-content-around col-4">
                            <span>{departure.name}</span>
                            <span>{arrival.name}</span>
                            <span>{date}</span>
                            <span>{time}</span>
                            <span>20€</span>
                            <span>{aviableSpace}</span>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center align-items-center col-3">
                    <button onClick={() => this.props.handleBook(route)} className="btn btn-dark bookBtn">Book space</button>
                </div>
            </div>
        );
    }
}

export default RouteCard;
