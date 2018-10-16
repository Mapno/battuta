import React from 'react';
import AuthService from '../auth/AuthService';
import UserSelect from '../search/UserSelect';
import RouteService from '../routes/RouteService';

class NewShipment extends React.Component {
    constructor() {
        super();
        this.state = {
            usersArray: [],
            description: '',
            size: 0,
            weight: 0,
            receiver: {}
        };
        this.authService = new AuthService();
        this.routeService = new RouteService();
    };

    findUsers = (inputValue) => {
        this.authService.find(inputValue)
            .then(users => {
                if(inputValue.length === 0)
                    return []
                else
                    return users.map(user => {
                        Object.defineProperty(user, 'value', Object.getOwnPropertyDescriptor(user, '_id'));
                        delete user['_id'];
                        Object.defineProperty(user, 'label', Object.getOwnPropertyDescriptor(user, 'username'));
                        delete user['username'];
                        return user;
                    });
            })
            .then(users => this.setState({ usersArray: users }))
    };

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleReceiverSelect = (user) => {
        this.setState({ receiver: user })
    }

    handleSubmit = event => {
        event.preventDefault();
        const { description, size, weight, receiver } = this.state;
        const { selectedRoute, user } = this.props;

        this.routeService.shipping(description, user, receiver, size, weight, selectedRoute)
            .then(data => console.log(data))

    }

    render() {
        const { usersArray } = this.state;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="description">Description</label>
                        <input type="text" name="description" size="100" onChange={e => this.handleChange(e)}></input>
                    </div>
                    <div>
                        <label htmlFor="size">Size</label>
                        <input type="number" name="size" onChange={e => this.handleChange(e)}></input>
                    </div>
                    <div>
                        <label htmlFor="weight">Weight</label>
                        <input type="number" name="weight" onChange={e => this.handleChange(e)}></input>
                    </div>
                    <div>
                        <label htmlFor="receiver">Receiver</label>
                        <UserSelect users={usersArray} findUsers={this.findUsers} name="receviver" handleReceiverSelect={this.handleReceiverSelect}/>
                    </div>
                    <div>
                        <button type="submit">Book shipment</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default NewShipment;