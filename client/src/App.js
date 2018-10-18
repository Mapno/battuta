import React, { Component } from 'react';
import './App.scss';
import { Route, Redirect } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import AuthService from './components/auth/AuthService';
import HomePage from './components/contents/HomePage';
import Footer from './components/footer/Footer';
import { CreateRoute } from './components/routes/CreateRoute';
import MyPackages from './components/profile/MyPackages';
import MyProfile from './components/profile/MyProfile';

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
    this.fetchUser()
    console.log(process.env.REACT_APP_API_URL)

    if (this.state.loggedInUser) {
      return (
        <div className="">
          <header className="">
            <Navbar userInSession={this.state.loggedInUser} logout={this.logout} />
          </header>
          <Route exact path='/' render={() => <HomePage user={this.state.loggedInUser}></HomePage>}></Route>
          <Route exact path='/login' render={() => <Redirect to="/" getUser={this.getTheUser} />} />
          <Route exact path='/signup' render={() => <Redirect to="/" getUser={this.getTheUser} />} />
          <Route exact path='/maps' render={() => <CreateRoute></CreateRoute>} />
          <Route exact path="/my-packages" render={() => <MyPackages user={this.state.loggedInUser}></MyPackages>} />
          <Route exact path="/profile" render={() => <MyProfile user={this.state.loggedInUser}></MyProfile>} />
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
