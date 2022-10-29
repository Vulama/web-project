const express = require('express');
const router = express.Router();

router.get('/:id/:comment', function (req, res, next) {
    if (req.query.comm && !(req.oidc.user === undefined)){
        var comment =  global.data.kola.find (kolo => kolo.id == req.params.id).comments.find(comment => comment.id == req.params.comment)
        comment.text = req.query.comm
    }

    res.render('koloedit', {
        user: req.oidc.user,
        comment: global.data.kola.find (kolo => kolo.id == req.params.id).comments.find(comment => comment.id == req.params.comment),
        kolo: global.data.kola.find (kolo => kolo.id == req.params.id),
    });
});

module.exports = router;
