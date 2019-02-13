const friendData = require("../data/friends");
const express = require('express');

const router = express.Router();

router.get("/friends", function(req, res) {
    res.json(friendData);
});

router.post("/friends", function(req, res) {
    friendData.push(req.body);
    res.json(friendData);
})

module.exports = router;