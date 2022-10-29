const express = require('express');
const router = express.Router();

router.get('/:id/:comment', function (req, res, next) {
    if (req.query.comm && !(req.oidc.user === undefined)){
        var comment =  global.data.utakmice.find (utakmica => utakmica.id == req.params.id).comments.find(comment => comment.id == req.params.comment)
        comment.text = req.query.comm
    }

    res.render('edit', {
        user: req.oidc.user,
        comment: global.data.utakmice.find (utakmica => utakmica.id == req.params.id).comments.find(comment => comment.id == req.params.comment),
        utakmica: global.data.utakmice.find (utakmica => utakmica.id == req.params.id),
    });
});

module.exports = router;
