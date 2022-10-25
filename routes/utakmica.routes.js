const express = require('express');
const router = express.Router();

router.get('/:id', function (req, res, next) {
    res.render('utakmica', {
        user: req.oidc.user,
        utakmica: global.data.utakmice.find (utakmica => utakmica.id == req.params.id),
    });
});

module.exports = router;