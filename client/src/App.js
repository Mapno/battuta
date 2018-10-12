import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import AuthService from './components/auth/AuthService';
import HomePage from './components/contents/HomePage';
import Footer from './components/footer/Footer';
import { CreateRoute } from './components/routes/CreateRoute';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

  getTheUser = (userObj) => {
    this.setState({
      loggedInUser: userObj
    })
  }

  logout = () => {
    this.service.logout()
      .then(() => {
        this.setState({ loggedInUser: null });
      })
  }

  fetchUser() {
    if (this.state.loggedInUser === null) {
      this.service.loggedin()
        .then(response => {
          this.setState({
            loggedInUser: response
          })
        })
        .catch(err => {
          this.setState({
            loggedInUser: false
          })
        })
    }
  }

  render() {
    // this.fetchUser()

    if (this.state.loggedInUser) {
      return (
        <div className="App">
          <header className="App-header">
            <Navbar userInSession={this.state.loggedInUser} logout={this.logout} />
          </header>

          <Footer></Footer>
        </div>
      );
    } else {
      return (
        <div className="">
          <header className="">
            <Navbar userInSession={this.state.loggedInUser} logout={this.logout} />
          </header>
          <Route exact path='/' render={() => <HomePage></HomePage>}></Route>
          <Route exact path='/signup' render={() => <Signup getUser={this.getTheUser} />} />
          <Route exact path='/login' render={() => <Login getUser={this.getTheUser} />} />
          <Route exact path='/maps' render={() => <CreateRoute></CreateRoute>} />
          <Footer></Footer>
        </div>
      );
    }
  }
}

export default App;
