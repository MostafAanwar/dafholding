const express = require('express');
const router = express.Router();
const User = require('../../models/User');
const bcrypt = require('bcrypt');

router.post('/', async (req, res) => {
    console.log(req.body);
    const newUser = new User({
        product_name: req.body.product_name,
        First_name: req.body.First_name,
        Mid_name: req.body.Mid_name,
        Last_name: req.body.Last_name,
        Phone_number: req.body.Phone_number,
        Created_at: req.body.Created_at
    });
    const hash = await bcrypt.hash(req.body.password, 10);
    newUser.password = hash;
    newUser.save().then(user => res.json(user));
});


module.exports = router;