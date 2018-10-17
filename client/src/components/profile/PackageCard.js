import React from 'react';
import { Table, Button } from 'react-materialize';
import RouteService from '../routes/RouteService';

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
            <div>
                {Object.keys(packages).map(key => {
                    return packages[key].length > 0 ? <div key={key}>
                        <h3>{key === 'asOwner' ? 'Sent Packages' : key === 'asShipper' ? 'Shipments' : 'Received Packages'}</h3>
                        <Table>
                            <thead>
                                <tr>
                                    <th data-field="id">Departure</th>
                                    <th data-field="name">Destination</th>
                                    <th data-field="price">Item</th>
                                    <th data-field="date">Date</th>
                                    <th data-field="time">Time of departure</th>
                                    <th data-field="owner">Owner</th>
                                    <th data-field="receiver">Receiver</th>
                                    <th data-field="shipper">Shipper</th>
                                    <th data-field="shipper">Status</th>
                                </tr>
                            </thead>
                            {packages[key].map(shipment => {
                                return <tbody key={shipment._id}>
                                    <tr>
                                        <td>{shipment.route.departure.name}</td>
                                        <td>{shipment.route.arrival.name}</td>
                                        <td>{shipment.description}</td>
                                        <td>{shipment.route.departureTime.split('').splice(0, 10).join('').split('-').sort(() => 1).join('-')}</td>
                                        <td>{shipment.route.departureTime.split('').splice(11, 5).join('')}</td>
                                        <td>{shipment.owner.username}</td>
                                        <td>{shipment.receiver.username}</td>
                                        <td>{shipment.carrier.username}</td>
                                        <td>{shipment.status}</td>
                                        {key === 'asShipper' && shipment.status === 'Pending' ?
                                            <td data-field>
                                                <Button
                                                    className="blue"
                                                    waves="green"
                                                    onClick={(event) => this.handleAccept(event.currentTarget.value)}
                                                    value={shipment._id}>Accept shimpent</Button>
                                            </td> :
                                            <td></td>}
                                    </tr>
                                </tbody>
                            })}
                        </Table>
                    </div> : <div key={key}></div>;
                })}
            </div>
        )
    }
}

export default PackageCard;