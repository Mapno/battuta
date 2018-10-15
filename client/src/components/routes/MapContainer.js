import React from "react";
import _ from "lodash";
import localize from "../maps/Localize";

export default class MapContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            map: {},
            directionsService: {},
            directionsDisplay: {},
            center: {}
        };
    }

    componentDidMount = () => {
        localize()
            .then(center => {
                this.setState({ center });
            })
            .then(() => {
                // console.log(this.state.center)
                const map = new window.google.maps.Map(document.getElementById("map"), {
                    center: this.state.center,
                    zoom: 8
                });
                return map;
            })
            .then(map => {
                this.setState({ map });
                this.setState({
                    directionsService: new window.google.maps.DirectionsService()
                });
                this.setState({
                    directionsDisplay: new window.google.maps.DirectionsRenderer({ map })
                });
            });
    };

    onRoute() {
        this.state.directionsDisplay.setMap(this.state.map);
        const request = {
            origin: { lat: this.props.departure.lat, lng: this.props.departure.lng },
            destination: { lat: this.props.arrival.lat, lng: this.props.arrival.lng },
            travelMode: "DRIVING"
        };
        this.state.directionsService.route(request, (res, status) => {
            if (status === "OK") this.state.directionsDisplay.setDirections(res);
        });
    }

    onMarker = () => {
        const { lat, lng } = this.props.departure;
        new window.google.maps.Marker({
            position: { lat, lng },
            map: this.state.map,
            title: this.props.departure.addres
        });
        this.state.map.setCenter({ lat, lng });
        this.state.directionsDisplay.setMap(null);
    };

    componentDidUpdate = () => {
        if (!_.isEqual(this.state.map, {}) && !_.isEqual(this.state.directionsDisplay, {}) && !_.isEqual(this.state.directionsService, {}))
            _.isEqual(this.props.arrival, {}) ? this.onMarker() : this.onRoute();
    };

    render() {
        return <div style={{ width: 500, height: 500 }} id="map" />;
    }
}
