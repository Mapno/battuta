import React, { Component } from 'react';
import AuthService from './AuthService';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
    this.service = new AuthService();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;

    this.service.login(username, password)
      .then(response => {
        this.setState({
          username: username,
          password: password,
          error: false
        });

        this.props.getUser(response)
      })
      .catch(error => {
        this.setState({
          username: username,
          password: password,
          error: true
        });
      });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {

    return (
      <div className="auth">
        <Grid container alignItems="center" justify="center" direction="column" style={{ height: "60vh" }}>
          <Card style={{ backgroundColor: "#ffffffbf", width: "22vw" }} >
            <Grid container alignItems="center" justify="center" direction="column">
              <h3 style={{ marginBottom: "3vh", marginTop: "3vh" }}>Wellcome back!</h3>
              <FormControl style={{ marginBottom: "2vh" }}>
                <InputLabel>Username:</InputLabel>
                <Input type="text" name="username" value={this.state.username} onChange={e => this.handleChange(e)} required />
              </FormControl>
              <FormControl style={{ marginBottom: "2vh" }}>
                <InputLabel>Password:</InputLabel>
                <Input type="password" name="password" value={this.state.password} onChange={e => this.handleChange(e)} required />
              </FormControl>
              <Button type="submit" value="Login" onClick={this.handleFormSubmit} variant="contained" color="primary">Log in</Button>
              <h1>{this.state.error ? 'Error' : ''}</h1>
            </Grid>
          </Card>
        </Grid>
      </div>
    )
  }
}

export default Login;