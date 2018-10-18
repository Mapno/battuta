import React, { Component } from 'react';
import AuthService from './AuthService';
import CarrierForm from './CarrierForm';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Card from '@material-ui/core/Card';

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
            <div className="auth">
                <Grid container alignItems="center" justify="center" direction="row" style={{ paddingTop: "2vh"}} >
                    <Card style={{ backgroundColor: "#ffffffbf", width: "28vw" }}>
                        <Grid container alignItems="center" justify="center" direction="column" >
                            <h3 style={{ marginBottom: "3vh", marginTop: "3vh" }}>Welcome!, create your account next:</h3>
                            <FormControl style={{ marginBottom: "2vh" }}>
                                <InputLabel>Username:</InputLabel>
                                <Input type="text" name="username" value={this.state.username} onChange={e => this.handleChange(e)} />
                            </FormControl>
                            <FormControl style={{ marginBottom: "2vh" }}>
                                <InputLabel>Password:</InputLabel>
                                <Input type="password" name="password" value={this.state.password} onChange={e => this.handleChange(e)} />
                            </FormControl>
                            <FormControl style={{ marginBottom: "2vh" }}>
                                <InputLabel>Email:</InputLabel>
                                <Input type="email" name="email" value={this.state.email} onChange={e => this.handleChange(e)} />
                            </FormControl>
                            <FormControl style={{ marginBottom: "2vh" }}>
                                <span >Become a Carrier:</span>
                                <Checkbox color="primary" id="become-button" name="carrier" onChange={e => this.handleChange(e)} />
                            </FormControl>
                        </Grid>
                        {carrierForm}
                        <Grid container alignItems="center" justify="center" direction="column" style={{marginBottom: "2vh"}}>
                            <Button variant="contained" color="primary" value="Sign up" onClick={this.handleFormSubmit} >Sign up</Button>
                        </Grid>
                    </Card>
                </Grid>
            </div>
        )
    }
}

export default Signup;