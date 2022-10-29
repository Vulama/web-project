var date = new Date();
var dateLabel = `${date.getDay()-1}.${date.getMonth()}.${date.getFullYear()}`

global.data = { 
    utakmice:[
        { 
            id: 1,
            team1: "dinamo", 
            team2: "hajduk", 
            gol1: 5, 
            gol2: 5,
            played: true,
            comments: [
                {
                    id: 1,
                    text: "Dinamo je najjaci",
                    owner: "xxx",
                    ownerAddress: "xxx@gmail.com",
                    date: dateLabel,
                },
                {
                    id: 2,
                    text: "Ma nije",
                    owner: "xxx",
                    ownerAddress: "xxx@gmail.com",
                    date: dateLabel,
                },
                {
                    id: 3,
                    text: "Jeee",
                    owner: "xxx",
                    ownerAddress: "xxx@gmail.com",
                    date: dateLabel,
                },
            ]
        }, 
        { 
            id: 2,
            team1: "rijeka", 
            team2: "osijek", 
            gol1: 1, 
            gol2: 5,
            played: true,
            comments: [
                {
                    id: 1,
                    text: "Dinamo je najjaci",
                    owner: "xxx",
                    ownerAddress: "xxx@gmail.com",
                    date: dateLabel,
                },
            ],
        }, 
        { 
            id: 3,
            team1: "dinamo", 
            team2: "rijeka", 
            gol1: 3, 
            gol2: 1,
            played: true,
            comments: [],
        }, 
        { 
            id: 4,
            team1: "osijek", 
            team2: "hajduk", 
            gol1: 1, 
            gol2: 1,
            played: true,
            comments: [
                {
                    id: 1,
                    text: "Dinamo je najjaci",
                    owner: "xxx",
                    ownerAddress: "xxx@gmail.com",
                    date: dateLabel,
                },
            ],
        }, 
        { 
            id: 5,
            team1: "dinamo", 
            team2: "osijek", 
            gol1: 0, 
            gol2: 0,
            played: false,
            comments: [],
        }, 
        { 
            id: 6,
            team1: "hajduk", 
            team2: "rijeka", 
            gol1: 0, 
            gol2: 0,
            played: false,
            comments: [],
        }
    ] 
}
