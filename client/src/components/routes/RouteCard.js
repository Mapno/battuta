import React from "react";

class RouteCard extends React.Component {

    constructor(props) {
        super(props)
        console.log(props.handleBook.toString())
    }

    render() {
        const route = this.props
        const { arrival, departure, aviableSpace, driver, date } = this.props.route;
        return (
            <div>
                <div>
                    <h4>Driver</h4>
                    <span>Name: {driver.username}</span>
                </div>
                <div>
                    <span>Date: {date}</span>
                    <span>From: {departure.name}</span>
                    <span>To: {arrival.name}</span>
                    <span>Price</span>
                    <span>Aviable Space: {aviableSpace}</span>
                </div>
                <button onClick={() => this.props.handleBook(route)}>Book space</button>
            </div>
        );
    }
}

export default RouteCard;
