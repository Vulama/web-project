const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
    res.render('home', {
        user: req.oidc.user,
        data: global.data
    });
});

module.exports = router;

