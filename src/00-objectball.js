function gameObject() {
    return {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
          "Alan Anderson": {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1,
          },
          "Reggie Evans": {
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 12,
            blocks: 12,
            slamDunks: 7,
          },
          "Brook Lopez": {
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assists: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15,
          },
          "Mason Plumlee": {
            number: 1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assists: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5,
          },
          "Jason Terry": {
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assists: 2,
            steals: 4,
            blocks: 11,
            slamDunks: 1,
          },
        },
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
          "Jeff Adrien": {
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assists: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2,
          },
          "Bismak Biyombo": {
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assists: 7,
            steals: 7,
            blocks: 15,
            slamDunks: 10,
          },
          "DeSagna Diop": {
            number: 2,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assists: 12,
            steals: 4,
            blocks: 5,
            slamDunks: 5,
          },
          "Ben Gordon": {
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assists: 2,
            steals: 1,
            blocks: 1,
            slamDunks: 0,
          },
          "Brendan Haywood": {
            number: 33,
            shoe: 15,
            points: 6,
            rebounds: 12,
            assists: 12,
            steals: 22,
            blocks: 5,
            slamDunks: 12,
          },
        },
      },
    };
  }
  
  const game = gameObject();
  const players = playersObject();
  const teamArr = Object.values(game);
  
  function playersObject() {
    return { ...game.home.players, ...game.away.players };
  }
  
  function numPointsScored(name) {
    return players[name].points;
  }
  
  function shoeSize(name) {
    return players[name].shoe;
  }
  
  function teamColors(teamName) {
    let team = teamArr.find((team) => team.teamName === teamName);
    return team.colors;
  }
  
  function teamNames() {
    return [game.home.teamName, game.away.teamName];
  }
  
  function playerNumbers(teamName) {
    let team = teamArr.find((team) => team.teamName === teamName);
    return Object.values(team.players).map((player) => player.number);
  }
  
  function playerStats(name) {
    return players[name];
  }
  
  function bigShoeRebounds() {
    let playersArr = Object.values(players);
  
    let maxShoe = 0;
    let maxShoeRebounds = 0;
  
    for (const player of playersArr) {
      if (player.shoe > maxShoe) {
        maxShoe = player.shoe;
        maxShoeRebounds = player.rebounds;
      }
    }
  
    return maxShoeRebounds;
  }
  
  function mostPointsScored() {
    let maxPoints = 0;
    let maxPointsPlayer = "";
  
    for (const player in players) {
      if (players[player].points > maxPoints) {
        maxPoints = players[player].points;
        maxPointsPlayer = player;
      }
    }
    return maxPointsPlayer;
  }
  
  function winningTeam() {
    return tallyPoints("home") > tallyPoints("away")
      ? game.home.teamName
      : game.away.teamName;
  }
  
  function tallyPoints(locationKey) {
    let team = game[locationKey];
    let pointTally = 0;
  
    for (const player in team.players) {
      pointTally += team.players[player].points;
    }
    return pointTally;
  }
  
  function playerWithLongestName() {
    let maxNameLength = 0;
    let longestNamePlayer = "";
  
    for (const player in playersObject()) {
      let playerNameLength = player.replace(/\s/g, "").length;
  
      console.log(playerNameLength);
      if (playerNameLength > maxNameLength) {
        maxNameLength = playerNameLength;
        longestNamePlayer = player;
      }
    }
  
    return longestNamePlayer;
  }
  
  function doesLongNameStealATon() {
    let playerName = playerWithLongestName();
    let mostSteals = 0;
    let playerRecords = playersObject();
  
    for (const player in playerRecords) {
      if (playerRecords[player].steals > mostSteals) {
        mostSteals = playerRecords[player].steals;
      }
    }
    return mostSteals === playerStats(playerName).steals;
  }
  
  debugger