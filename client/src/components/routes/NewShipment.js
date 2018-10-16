import React from 'react';
import AuthService from '../auth/AuthService';
import UserSelect from '../search/UserSelect';

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
        this.service = new AuthService();
    };

    findUsers = (inputValue) => {
        this.service.find(inputValue)
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

    render() {
        const { usersArray } = this.state;
        return (
            <div>
                <form>
                    <div>
                        <label htmlFor="description">Description</label>
                        <input type="text" name="description" onChange={e => this.handleChange(e)}></input>
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