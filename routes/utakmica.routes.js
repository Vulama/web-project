const express = require('express');
const router = express.Router();

router.get('/:id', function (req, res, next) {
    if (req.query.comm && !(req.oidc.user === undefined)){
        var id = global.data.utakmice.find (utakmica => utakmica.id == req.params.id).comments.map(com => com.id).pop()
        global.data.utakmice.find (utakmica => utakmica.id == req.params.id).comments.push(
            {
                id: id + 1,
                text: req.query.comm,
                owner: req.oidc.user.nickname,
                ownerAddress: req.oidc.user.name,
            }
        );
    }
    if (req.query.del && !(req.oidc.user === undefined)){
        var com = global.data.utakmice.find (utakmica => utakmica.id == req.params.id).comments.find(com => com.id.toString() == req.query.del)
        if(com.ownerAddress == req.oidc.user.name || req.oidc.user.name == "admin@proba.com"){
            var index = global.data.utakmice.find (utakmica => utakmica.id == req.params.id).comments.indexOf(com)
            if (index > -1){
                global.data.utakmice.find (utakmica => utakmica.id == req.params.id).comments.splice(index, 1)
            }
        }
    }
    res.render('utakmica', {
        user: req.oidc.user,
        utakmica: global.data.utakmice.find (utakmica => utakmica.id == req.params.id),
    });
});

module.exports = router;