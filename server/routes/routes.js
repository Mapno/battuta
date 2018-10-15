const express = require('express');
const router = express.Router();
const Route = require('../models/Route')

router.post('/create', (req,res,next) => {
    const { arrival, departure, date, space } = req.body;
    const user = req.user._id;
    console.log(user)
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

module.exports = router;