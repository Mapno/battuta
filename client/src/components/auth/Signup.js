import React, { Component } from 'react';
import AuthService from './AuthService';
import CarrierForm from './CarrierForm';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = { username: '', password: '', email: '', carrier: false, brand: '', model: '', color: '', registration: '' };
        this.service = new AuthService();
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        const { username, password, email, carrier, brand, model, color, registration } = this.state;

        if (!carrier) {
            this.service.signup(username, password, email)
                .then(res => {
                    this.setState({
                        username: "",
                        password: "",
                        email: ""
                    });
                    this.props.getUser(res.user)
                })
                .catch(error => console.log(error))
        } else {
            this.service.signupCarrier(username, password, email, brand, model, color, registration, carrier)
                .then(res => {
                    this.setState({
                        username: "",
                        password: "",
                        email: "",
                        brand: "",
                        model: "",
                        color: "",
                        registration: ""
                    });
                    this.props.getUser(res.user)
                })
                .catch(error => console.log(error))
        }
    }

    handleChange = (event) => {
        const { target } = event
        const { name } = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({ [name]: value });
    }


    render() {
        let carrierForm;
        if (this.state.carrier) carrierForm = <CarrierForm handleChange={this.handleChange} brand={this.state.brand} model={this.state.model} color={this.state.color} registration={this.state.registration}></CarrierForm>
        return (
            <div>
                <h3>Welcome!, create your account next:</h3>

                <form onSubmit={this.handleFormSubmit}>
                    <fieldset>
                        <label>Username:</label>
                        <input type="text" name="username" value={this.state.username} onChange={e => this.handleChange(e)} />

                        <label>Password:</label>
                        <input type="password" name="password" value={this.state.password} onChange={e => this.handleChange(e)} />

                        <label>Email:</label>
                        <input type="email" name="email" value={this.state.email} onChange={e => this.handleChange(e)} />

                        <label>Become a Carrier:</label>
                        <input type="checkbox" name="carrier" value={this.state.carrier} onChange={e => this.handleChange(e)}></input>
                        {carrierForm}
                    </fieldset>
                    <input type="submit" value="Sign up" />
                </form>

            </div>
        )
    }
}

export default Signup;