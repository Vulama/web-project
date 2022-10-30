const express = require('express');
const router = express.Router();

router.get('/:id', function (req, res, next) {
    if (req.query.comm && !(req.oidc.user === undefined)){
        var date = new Date();
        var dateLabel = date.toLocaleDateString("hr-HR");
        var id = global.data.kola.find (kolo => kolo.id == req.params.id).comments.map(com => com.id).pop()
        global.data.kola.find (kolo => kolo.id == req.params.id).comments.push(
            {
                id: id + 1,
                text: req.query.comm,
                owner: req.oidc.user.nickname,
                ownerAddress: req.oidc.user.name,
                date: dateLabel,
            }
        );
    }

    if (req.query.del && !(req.oidc.user === undefined)){
        var com = global.data.kola.find (kolo => kolo.id == req.params.id).comments.find(com => com.id.toString() == req.query.del)
        if(com.ownerAddress == req.oidc.user.name || req.oidc.user.name == "admin@proba.com"){
            var index = global.data.kola.find (kolo => kolo.id == req.params.id).comments.indexOf(com)
            if (index > -1){
                global.data.kola.find (kolo => kolo.id == req.params.id).comments.splice(index, 1)
            }
        }
    }
    
    res.render('kolo', {
        user: req.oidc.user,
        kolo: global.data.kola.find (kolo => kolo.id == req.params.id),
    });
});

module.exports = router;