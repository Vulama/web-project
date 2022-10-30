var date = new Date();
var dateLabel = date.toLocaleDateString("hr-HR");

global.data = { 
    kola:[
        {
            id: 1,
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
            comments: []
        },
        {
            id: 3,
            comments: []
        }
    ],
    utakmice:[
        { 
            id: 1,
            date: dateLabel,
            team1: "Dinamo", 
            team2: "Hajduk", 
            gol1: 5, 
            gol2: 5,
            played: true,
            kolo: 1,
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
            date: dateLabel,
            team1: "Rijeka", 
            team2: "Osijek", 
            gol1: 1, 
            gol2: 5,
            played: true,
            kolo: 1,
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
            date: dateLabel,
            team1: "Dinamo", 
            team2: "Rijeka", 
            gol1: 3, 
            gol2: 1,
            played: true,
            kolo: 2,
            comments: [],
        }, 
        { 
            id: 4,
            date: dateLabel,
            team1: "Osijek", 
            team2: "Hajduk", 
            gol1: 1, 
            gol2: 1,
            played: true,
            kolo: 2,
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
            date: "",
            team1: "Dinamo", 
            team2: "Osijek", 
            gol1: 0, 
            gol2: 0,
            played: false,
            kolo: 3,
            comments: [],
        }, 
        { 
            id: 6,
            date: "",
            team1: "Hajduk", 
            team2: "Rijeka", 
            gol1: 0, 
            gol2: 0,
            played: false,
            kolo: 3,
            comments: [],
        }
    ] 
}
