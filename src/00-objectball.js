const gameObject = () => {
    const teams = {
        "home": {
            "teamName": "Brooklyn Nets",
            "colors": ["Black", "White"],
            "players": {
            	"Alan Anderson": {
                    "Number": 0,
                    "Shoe":	16,
                    "Points": 22,
                    "Rebounds": 12,
                    "Assists": 12,
                    "Steals": 3,
                    "Blocks": 1,
                    "Slam Dunks": 1
                },
                
                "Reggie Evans": {
                    "Number":	30,
                    "Shoe":	14,
                    "Points": 12,
                    "Rebounds": 12,
                    "Assists": 12,
                    "Steals": 12,
                    "Blocks": 12,
                    "Slam Dunks": 7    
                },

                "Brook Lopez": {
                    "Number": 11,
                    "Shoe": 17,
                    "Points": 17,
                    "Rebounds": 19,
                    "Assists": 10,
                    "Steals": 3,
                    "Blocks": 1,
                    "Slam Dunks": 15
                },

                "Mason Plumlee": {
                    "Number": 1,
                    "Shoe": 19,
                    "Points": 26,
                    "Rebounds": 12,
                    "Assists": 6,
                    "Steals": 3,
                    "Blocks": 8,
                    "Slam Dunks": 5
                },

                "Jason Terry": {
                    "Number": 31,
                    "Shoe": 15,
                    "Points": 19,
                    "Rebounds": 2,
                    "Assists": 2,
                    "Steals": 4,
                    "Blocks": 11,
                    "Slam Dunks": 1
                }
            }
        },
        "away": {
            "teamName": "Charlotte Hornets",
            "colors": ["Turquoise", "Purple"],
            "players": {
                "Jeff Adrien": {
                    "Number": 4,
                    "Shoe": 18,
                    "Points": 10,
                    "Rebounds": 1,
                    "Assists": 1,
                    "Steals": 2,
                    "Blocks": 7,
                    "Slam Dunks": 2
                },

                "Bismak Biyombo": {
                    "Number": 0,
                    "Shoe": 16,
                    "Points": 12,
                    "Rebounds": 4,
                    "Assists": 7,
                    "Steals": 7,
                    "Blocks": 15,
                    "Slam Dunks": 10
                },

                "DeSagna Diop": {
                    "Number": 2,
                    "Shoe": 14,
                    "Points": 24,
                    "Rebounds": 12,
                    "Assists": 12,
                    "Steals": 4,
                    "Blocks": 5,
                    "Slam Dunks": 5
                },

                "Ben Gordon": {
                    "Number": 8,
                    "Shoe": 15,
                    "Points": 33,
                    "Rebounds": 3,
                    "Assists": 2,
                    "Steals": 1,
                    "Blocks": 1,
                    "Slam Dunks": 0
                },

                "Brendan Haywood": {
                    "Number": 33,
                    "Shoe": 15,
                    "Points": 6,
                    "Rebounds": 12,
                    "Assists": 12,
                    "Steals": 22,
                    "Blocks": 5,
                    "Slam Dunks": 12
                }
            }
        }
    };

    return teams;
}

const theGameObject = gameObject();
console.log(theGameObject)

const numPointsScored = (player) => {
    for (let place in theGameObject){
        let teamObj = theGameObject[place];
        let allPlayers = teamObj.players;
        for (let playa in allPlayers) {
            if (playa === player) {
                return allPlayers[playa].Points;
            }
        }
        
    }
    return "Player not found"
};

console.log(numPointsScored("Bismak Biyombo"))

const shoeSize = (player) => {
    for (let place in theGameObject){
        let teamObj = theGameObject[place];
        let allPlayers = teamObj.players;
        for (let playa in allPlayers) {
            if (playa === player) {
                return allPlayers[playa].Shoe;
            }
        }
        
    }
    return "Player not found"
}

console.log(shoeSize("Brendan Haywood"))

const teamColors = (team) => {
    for (let place in theGameObject) {
        let teamObj = theGameObject[place];
        if (team === teamObj.teamName) {
            return teamObj.colors;            
        }
    }
    return "Team not found"
}

console.log(teamColors("Charlotte Hornets"));

const teamNames = (obj) => {
    let teamsArray = [];
    for (let place in obj) {
        teamsArray.push(obj[place].teamName)
    }
    return teamsArray;
};

console.log(teamNames(theGameObject));

const playerNumbers = (team) => {
    let jerseyNos = [];
    for (let place in theGameObject) {
        if (team === theGameObject[place].teamName) {
            for (let player in theGameObject[place].players) {
                jerseyNos.push(theGameObject[place].players[player].Shoe);
            }
        }
    }
    return jerseyNos;
}

console.log(playerNumbers("Charlotte Hornets"))

const playerStats = (player) => {
    for (let place in theGameObject){
        let teamObj = theGameObject[place];
        let allPlayers = teamObj.players;
        for (let playa in allPlayers) {
            if (playa === player) {
                return allPlayers[playa];
            }
        }
        
    }
    return "Player not found"
};

console.log(playerStats("Alan Anderson"));

const bigShoeRebounds = () => {
    for (let place in theGameObject) {
        let teamObj = theGameObject[place];
        let largestShoe = 0;
        let allPlayers = teamObj.players
        for (let playa in allPlayers) {
            if (allPlayers[playa].Shoe > largestShoe) {
                largestShoe = allPlayers[playa].Shoe
            }
        }
        for (let playa in allPlayers) {
            if (allPlayers[playa].Shoe == largestShoe) {
                return allPlayers[playa].Rebounds
            }
        }
    }
}

console.log(bigShoeRebounds())

const mostPointsScored = () => {
    let mostPoints = 0;
    let topScorer = '';

    for (let place in theGameObject) {
        let teamObj = theGameObject[place];
        let allPlayers = teamObj.players;
        for (let playa in allPlayers) {
            if (allPlayers[playa].Points > mostPoints) {
                mostPoints = allPlayers[playa].Points
                topScorer = playa
            }
        }
    }

    return topScorer
}

console.log(mostPointsScored());

const winningTeam = () => {
    let homeTeamObj = theGameObject["home"];
    let awayTeamObj = theGameObject["away"];
    let homePlayers = homeTeamObj.players;
    let awayPlayers = awayTeamObj.players;
    let homePoints = 0;
    let awayPoints = 0;
    for (let playa in homePlayers) {
        homePoints += homePlayers[playa].Points
    }

    for (let playa in awayPlayers) {
        awayPoints += awayPlayers[playa].Points
    }

    return homePoints > awayPoints ? homeTeamObj.teamName : awayTeamObj.teamName;
        
}

console.log(winningTeam())

const playerWithLongestName = () => {
    let homeTeamObj = theGameObject["home"];
    let awayTeamObj = theGameObject["away"];
    let homePlayers = homeTeamObj.players;
    let awayPlayers = awayTeamObj.players;
    let homeLongestName = '';
    let awayLongestName = '';
    for (let playa in homePlayers) {
        if (playa.length > homeLongestName.length) {
            homeLongestName = playa            
        }
    }

    for (let playa in awayPlayers) {
        if (playa.length > awayLongestName.length) {
            awayLongestName = playa
        }
    }

    return homeLongestName.length > awayLongestName.length ? homeLongestName : awayLongestName;       
}

console.log(playerWithLongestName())

const doesLongNameStealATon = () => {
    let longestName = playerWithLongestName();
    for (let place in theGameObject) {
        let teamObj = theGameObject[place]
        let allPlayers = teamObj.players;
        if (allPlayers[longestName]) {
            let longestNameSteals = allPlayers[longestName].Steals
            for (let playa in allPlayers) {
                if (allPlayers[playa].Steals > longestNameSteals) {
                    return false
                }
            };
        };
    };  
    return true
};

console.log(doesLongNameStealATon())