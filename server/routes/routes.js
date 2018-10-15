const express = require('express');
const router = express.Router();
const Route = require('../models/Route')

router.post('/create', (req,res,next) => {
    const { arrival, departure, date, space } = req.body;
    const user = req.user._id;
    return new Route({
        arrival,
        departure,
        departureTime: date,
        aviableSpace: space,
        driver: user
    }).save()
    .then(route => res.status(200).json(route))
    .catch(e => next(e))
});

router.post('/search', (req,res,next) => {
    const { arrival, departure, date } = req.body;
    console.log(date)
    Route.find({departureTime: {$gte: date}})
    .then(data => res.status(200).json(data))
    .catch(e => next(e))
})

module.exports = router;