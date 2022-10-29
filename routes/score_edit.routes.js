const express = require('express');
const router = express.Router();

router.get('/:id', function (req, res, next) {
    if (req.query.t1 && req.query.t2 && req.oidc.user.name == "admin@proba.com"){
        var date = new Date();
        var dateLabel = `${date.getDay()}.${date.getMonth()}.${date.getFullYear()}`
        var utakmica = global.data.utakmice.find (utakmica => utakmica.id == req.params.id)
        utakmica.gol1 = req.query.t1
        utakmica.gol2 = req.query.t2
        if (!utakmica.played){
            utakmica.date = dateLabel
        }
        utakmica.played = true
    }

    res.render('scoreedit', {
        user: req.oidc.user,
        utakmica: global.data.utakmice.find (utakmica => utakmica.id == req.params.id),
    });
});

module.exports = router;