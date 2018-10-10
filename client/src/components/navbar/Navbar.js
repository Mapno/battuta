import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../auth/AuthService';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = { loggedInUser: null };
        this.service = new AuthService();
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ ...this.state, loggedInUser: nextProps["userInSession"] })
    }

    handleLogout = (e) => {
        this.props.logout()
    }

    render() {
        if (this.state.loggedInUser) {
            return (
                <nav className="navbar bg-light">
                    <ul>
                        <li><a onClick={this.handleLogout}>Logout</a></li>
                    </ul>

                    <h2>Welcome, {this.state.loggedInUser.username}</h2>
                </nav>
            )
        } else {
            return (
                <nav className="navbar bg-dark navbar-expand-lg navbar-dark">
                    <Link to="/" alt="" className="nav-link">Home</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active"><Link to="/profile" className="nav-link">My profile</Link></li>
                    </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item active"><Link to='/signup' className="nav-link">Signup</Link></li>
                            <li className="nav-item active"><Link to='/login' className="nav-link">Login</Link></li>
                        </ul>
                    </div>
                </nav>
            )
        }
    }
}

export default Navbar;