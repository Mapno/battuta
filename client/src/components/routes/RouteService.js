import axios from "axios";

class RouteService {
  constructor() {
    this.service = axios.create({
      baseURL: "http://localhost:3000/api/route",
      withCredentials: true
    });
  }

  create = (arrival, departure, date, space) => {
    return this.service.post("/create", { arrival, departure, date, space })
      .then(res => res.data)
      .catch(error => console.log(error));
  };

  search = (arrival, departure, date) => {
    return this.service.post('/search', { arrival, departure, date })
      .then(res => res.data)
      .catch(error => console.log(error));
  }

  show = id => {
    return this.service.get('/my-routes', { id })
      .then(res => res.data)
      .catch(error => console.log(error));
  }

  shipping = (description, owner, receiver, size, weight, route) => {
    return this.service.post('/new-shipment', { description, owner, receiver, size, weight, route })
      .then(res => res.data)
      .catch(error => console.log(error));
  }

  find = user => {
    return this.service.post('/find', { user })
      .then(res => res.data)
      .catch(error => console.log(error));
  }

  accept = id => {
    return this.service.put('/accept', { id })
      .then(res => res.data)
      .catch(error => console.log(error));
  }
}

export default RouteService;