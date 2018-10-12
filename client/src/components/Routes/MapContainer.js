import React from "react";
import _ from "lodash";

export default class MapContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            map: {},
            directionsService: {},
            directionsDisplay: {}
        };
    }

    componentWillMount() {
    }

    componentDidMount() {
        const map = new window.google.maps.Map(document.getElementById("map"), {
            center: { lat: 41.0082, lng: 28.9784 },
            zoom: 8
        });
        this.setState({ map });
        this.setState({ directionsService: new window.google.maps.DirectionsService() });
        this.setState({ directionsDisplay: new window.google.maps.DirectionsRenderer({ map }) })
    }

    onRoute() {
        this.state.directionsDisplay.setMap(this.state.map)
        const request = {
            origin: { lat: this.props.departure.lat, lng: this.props.departure.lng },
            destination: { lat: this.props.arrival.lat, lng: this.props.arrival.lng },
            travelMode: "DRIVING"
        };
        this.state.directionsService.route(request, (res, status) => {
            if (status === "OK") this.state.directionsDisplay.setDirections(res);
        });
        console.log('hola')
    }

    onSelect = () => {
        const { lat, lng } = this.props.departure;
        new window.google.maps.Marker({
            position: {
                lat: this.props.departure.lat,
                lng: this.props.departure.lng
            },
            map: this.state.map,
            title: this.props.departure.addres
        });
        this.state.map.setCenter({ lat, lng });
        this.state.directionsDisplay.setMap(null)
    };
    componentDidUpdate() {
        _.isEqual(this.props.arrival, {}) ? this.onSelect() : this.onRoute();
    }

    render() {
        return <div style={{ width: 500, height: 500 }} id="map" />;
    }
}
