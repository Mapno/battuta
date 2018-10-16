const express = require('express');
const router = express.Router();
const Route = require('../models/Route');
const Package = require('../models/Package');

router.post('/create', (req, res, next) => {
    const { arrival, departure, date, space } = req.body;
    const user = req.user._id;
    const arrivalGeojson = {
        name: arrival.address,
        location: {
            type: 'Point',
            coordinates: [arrival.lat, arrival.lng]
        }
    }
    const departureGeojson = {
        name: departure.address,
        location: {
            type: 'Point',
            coordinates: [departure.lat, departure.lng]
        }
    }
    return new Route({
        arrival: arrivalGeojson,
        departure: departureGeojson,
        departureTime: date,
        aviableSpace: space,
        driver: user
    }).save()
        .then(route => res.status(200).json(route))
        .catch(e => next(e))
});

router.post('/search', (req, res, next) => {
    const earthRadius = 6378.15214;
    const radius = 10;
    const { arrival, departure, date } = req.body;
    Route.find({
        'departure.location': { $geoWithin: { $centerSphere: [[departure.lat, departure.lng], radius / earthRadius] } },
        'arrival.location': { $geoWithin: { $centerSphere: [[arrival.lat, arrival.lng], radius / earthRadius] } },
        'departureTime': { $gte: date }
    })
        .populate('driver')
        .then(data => res.status(200).json(data))
        .catch(e => next(e))
});

router.get('/my-routes', (req, res, next) => {
    Package.find({ owner: req.body._id })
        .populate('receiver')
        .populate('driver')
        .populate('route')
        .then(data => res.status(200).json(data))
        .catch(e => next(e));
});

router.get('/new-shipment', (req, res, next) => {
    const { description, owner, receiver, carrier, size, weight, route } = req.body;
    
});

router.use((err, req, res) => {
    res.status(500).json({ message: err.message });
});

module.exports = router;