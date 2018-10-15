import React from "react";
import AuthService from "../auth/AuthService";

class RouteCard extends React.Component {
  constructor() {
    super();
    this.state = {
      redirect: false,
      friends: []
    };
    this.service = new AuthService();
  }

  handleBook() {
    this.service.getFriends()
    .then(friends => this.setState({ friends }))
    .then(() => this.setState({redirect: true}));
  };

  render() {
    const { arrival, departure, aviableSpace, driver, date } = this.props.route;
    if (this.state.redirect) return <div>hola</div>;
    else
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
          <form onSubmit={this.handleBook}>
            <button type="submit">Book space</button>
          </form>
        </div>
      );
  }
}

export default RouteCard;
