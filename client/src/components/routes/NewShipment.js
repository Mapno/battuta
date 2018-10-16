import React from 'react';
import AuthService from '../auth/AuthService';
import UserSelect from '../search/UserSelect';

class NewShipment extends React.Component {
    constructor() {
        super();
        this.state = {
            usersArray: []
        };
        this.service = new AuthService();
    };

    findUsers = (inputValue) => {
        this.service.find(inputValue)
            .then(users => {
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


    render() {
        const { usersArray } = this.state;
        console.log(usersArray)
        return (
            <div>
                <form>
                    <div>
                        <label htmlFor="description">Description</label>
                        <input type="text" name="description"></input>
                    </div>
                    <div>
                        <label htmlFor="size">Size</label>
                        <input type="number" name="size"></input>
                    </div>
                    <div>
                        <label htmlFor="weight">Weight</label>
                        <input type="number" name="weight"></input>
                    </div>
                    <div>
                        <label htmlFor="receiver">Receiver</label>
                        <input type="text" name="Receviver" onChange={(event) => this.findUsers(event.currentTarget.value)}></input>
                        <UserSelect users={usersArray} findUsers={this.findUsers}></UserSelect>
                    </div>
                </form>
            </div>
        )
    }

}

export default NewShipment;