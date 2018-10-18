import axios from 'axios';

class AuthService {
  constructor() {
    this.service = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/auth`,
      withCredentials: true
    });
  };

  signup = (username, password, email) => {
    return this.service.post('/signup', { username, password, email })
      .then(res => res.data)
  };

  signupCarrier = (username, password, email, brand, model, color, registration, carrier) => {
    return this.service.post('/signup', { username, password, email, brand, model, color, registration, carrier })
      .then(res => res.data)
  };

  login = (username, password) => {
    return this.service.post('/login', { username, password })
      .then(res => res.data)
  };

  loggedin = () => {
    console.log(process.env.REACT_APP_API_URL)
    return this.service.get('/currentuser')
      .then(res => res.data)
  };

  logout = () => {
    return this.service.get('/logout')
      .then(res => res.data)
  };

  find = (user) => {
    return this.service.post('/find', { username: user })
      .then(res => res.data)
  }
};

export default AuthService;