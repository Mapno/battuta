import React from 'react';

export default class MapContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            map: {}
        }
    }

    componentDidMount() {
        const map = new window.google.maps.Map(document.getElementById('map'), {
            center: { lat: 41.0082, lng: 28.9784 },
            zoom: 8
        })
        this.setState({map});
    }

    onSelect = () => {
        const {lat, lng} = this.props.departure
        new window.google.maps.Marker({
            position: { lat: this.props.departure.lat, lng: this.props.departure.lng },
            map: this.state.map,
            title: this.props.departure.addres
        });
        console.log()
        this.state.map.setCenter({lat,lng})
    }
    componentDidUpdate() {
        this.onSelect()
    }

    render() {
        return (
            <div style={{ width: 500, height: 500 }} id="map" />
        );
    }
}
