const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
    var teams = new Set(global.data.utakmice.flatMap( u => [u.team1, u.team2]))
    var resPerGame = global.data.utakmice.flatMap(
        u=> 
        [
            [
                u.team1,
                getPoints(u.gol1, u.gol2, u.played),
                u.gol1
            ],
            [
                u.team2,
                getPoints(u.gol2, u.gol1, u.played),
                u.gol2
            ]
        ]
    )
    var table = []
    teams.forEach(element => {
        table.push({
            team: element,
            score: 0,
            points: 0
        })
    });
    
    resPerGame.forEach(element => {
        team = table.find(a => a.team == element[0])
        team.score = team.score + element[2]
        team.points = team.points + element[1]
    });

    table.sort((a,b) => { 
        if (b.points == a.points){
            return b.score - a.score
        }
        return b.points - a.points
    });
    
    res.render('home', {
        user: req.oidc.user,
        data: global.data,
        table: table
    });
});



function getPoints(g1, g2, played){
    if(played) {
        if(parseInt(g1) > parseInt(g2)){
            return 3
        } else if (parseInt(g2) > parseInt(g1)){
            return 0
        } else {
            return 1
        }
    }
    return 0
}

module.exports = router;

