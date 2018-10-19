import React from 'react';
import AuthService from '../auth/AuthService';
import UserSelect from '../search/UserSelect';
import RouteService from '../routes/RouteService';
import { Redirect } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

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
                if (inputValue.length === 0)
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

        this.setState({ redirect: true })

    }

    render() {
        const { usersArray } = this.state;
        if (this.state.redirect)
            return <Redirect to="/my-packages"></Redirect>
        else
            return (
                <Grid container align="center" justify="center" direction="column" className="search-page">
                    <Paper style={{ backgroundColor: "#ffffffbf" }}>
                        <Grid container align="center" justify="center" direction="column">
                            <FormControl style={{ marginTop: "2vh" }}>
                                <InputLabel htmlFor="description">Description</InputLabel>
                                <Input type="text" name="description" size="100" onChange={e => this.handleChange(e)}></Input>
                            </FormControl>
                            <FormControl style={{ marginTop: "2vh" }}>
                                <InputLabel htmlFor="size">Size</InputLabel>
                                <Input type="number" name="size" onChange={e => this.handleChange(e)}></Input>
                            </FormControl>
                            <FormControl style={{ marginTop: "2vh" }}>
                                <InputLabel htmlFor="weight">Weight</InputLabel>
                                <Input type="number" name="weight" onChange={e => this.handleChange(e)}></Input>
                            </FormControl>
                            <FormControl style={{ marginTop: "2vh", width: "28vw" }}>
                                <InputLabel htmlFor="receiver">Receiver</InputLabel>
                                <UserSelect users={usersArray} findUsers={this.findUsers} name="receviver" handleReceiverSelect={this.handleReceiverSelect} />
                            </FormControl>
                            <Grid>
                                <Button color="primary" variant="contained" onClick={this.handleSubmit}>Book shipment</Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            )
    }
}

export default NewShipment;