import React, { Component } from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';

class CarrierForm extends Component {

    handleChange = (event) => {
        this.props.handleChange(event);
    }

    render() {
        return (
            <Grid
            container
            alignItems="center"
            justify="center"
            direction="column"
            >
                <h4>Your vehicle</h4>
                <FormControl className="d-flex flex-row my-3 justify-content-around">
                    <InputLabel className="signup-label" shrink>Brand:</InputLabel>
                    <Input type="text" name="brand" value={this.props.brand} onChange={e => this.handleChange(e)}></Input>
                </FormControl>
                <FormControl className="d-flex flex-row my-3 justify-content-around">
                    <InputLabel className="signup-label" shrink>Model:</InputLabel>
                    <Input type="text" name="model" value={this.props.model} onChange={e => this.handleChange(e)}></Input>
                </FormControl>
                <FormControl className="d-flex flex-row my-3 justify-content-around">
                    <InputLabel className="signup-label" shrink>Color:</InputLabel>
                    <Input type="text" name="color" value={this.props.color} onChange={e => this.handleChange(e)}></Input>
                </FormControl>
                <FormControl className="d-flex flex-row my-3 justify-content-around">
                    <InputLabel className="signup-label" shrink>Registration Number:</InputLabel>
                    <Input type="text" name="registration" value={this.props.registration} onChange={e => this.handleChange(e)} maxLength="7"></Input>
                </FormControl>
            </Grid>
        );
    };
};

export default CarrierForm;