const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');
const passport = require('passport');
const Vehicle = require('../models/Vehicle');


const login = (req, user) => {
    return new Promise((resolve, reject) => {
        req.login(user, err => {
            if (err) {
                reject(new Error('Something went wrong'));
            } else {
                resolve(user);
            };
        });
    });
};

router.post('/signup', (req, res, next) => {

    const { username, password, email, brand, model, color, registration, carrier } = req.body;

    if (!username || !password) next(new Error('You must provide valid credentials'));

    if (!carrier) {
        User.findOne({ username })
            .then(foundUser => {
                if (foundUser) throw new Error('Username already exists');

                const salt = bcrypt.genSaltSync(10);
                const hashPass = bcrypt.hashSync(password, salt);

                return new User({
                    username,
                    password: hashPass,
                    email
                }).save();
            })
            .then(savedUser => login(req, savedUser))
            .then(user => res.json({ status: 'signup & login successfully', user }))
            .catch(e => next(e));
    } else {
        User.findOne({ username })
            .then(foundUser => {
                if (foundUser) {
                    if (foundUser.username === username || foundUser.email === email) throw new Error('User already exists');
                }

                const salt = bcrypt.genSaltSync(10);
                const hashPass = bcrypt.hashSync(password, salt);

                return new User({
                    username,
                    password: hashPass,
                    email
                }).save()
            })
            .then(({ _id }) => {
                Vehicle.findOne({ registrationNumber: registration })
                    .then((vehicle) => {
                        if (vehicle) throw new Error('Vehicle already registered');

                        return new Vehicle({
                            brand,
                            model,
                            color,
                            registration,
                            owner: _id
                        }).save()
                            .then((vehicle) => {
                                return User.findByIdAndUpdate(vehicle.owner, { vehicle: vehicle._id, $push: { role: 'carrier' } })
                            })
                            .then(savedUser => login(req, savedUser))
                            .then(user => res.json({ status: 'signup & login successfully', user }))
                            .catch(e => next(e));
                    });
            })
    };
});


router.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user, failureDetails) => {
        if (err) next(new Error('Something went wrong'));
        if (!user) next(failureDetails)
        login(req, user).then(() => res.status(200).json(req.user));
    })(req, res, next);
});

router.get('/currentuser', (req, res, next) => {
    if (req.user) {
        res.status(200).json(req.user);
    } else {
        next(new Error('Not logged in'))
    }
})

router.get('/logout', (req, res) => {
    req.logout();
    res.status(200).json({ message: 'logged out' })
});

router.post('/find', (req, res) => {
    const { username } = req.body;
    if (username.length === 0) res.status(200).json({})
    if (username.length >= 4) {
        const regexp = new RegExp(username, 'i')
        User.find({ username: regexp }, { username: 1 }, { limit: 10 })
            .then(users => res.status(200).json(users))
            .catch(error => next(error))
    }
})

router.use((err, req, res) => {
    res.status(500).json({ message: err.message });
});

module.exports = router;