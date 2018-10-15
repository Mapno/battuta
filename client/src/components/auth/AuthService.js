import axios from 'axios';

class AuthService {
  constructor() {
    this.service = axios.create({
      baseURL: 'http://localhost:3000/api/auth',
      withCredentials: true
    });
  }

  signup = (username, password, email) => {
    return this.service.post('/signup', { username, password, email })
      .then(res => res.data)
  }

  signupCarrier = (username, password, email, brand, model, color, registration, carrier) => {
    return this.service.post('/signup', { username, password, email, brand, model, color, registration, carrier })
      .then(res => res.data)
  }

  login = (username, password) => {
    return this.service.post('/login', { username, password })
      .then(res => res.data)
  }

  loggedin = () => {
    return this.service.get('/currentuser')
      .then(res => res.data)
  }

  logout = () => {
    return this.service.get('/logout')
      .then(res => res.data)
  }

  getFriends = () => {
    return this.service.get('/my-friends')
      .then(res => res.data)
  }
}

export default AuthService;