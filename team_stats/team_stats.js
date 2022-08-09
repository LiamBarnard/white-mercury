const team = {
  _players: [
    {firstName:'Cristiano', lastName: 'Ronaldo', age: 37},
    {firstName:'Jadon', lastName: 'Sancho', age: 22},
    {firstName:'Bruno', lastName: 'Fernandes', age: 27}
  ],
  _games: [
    {opponent: 'Chelsea', teamGoals: 4, opponentGoals: 1},
    {opponent: 'Tottenham', teamGoals: 2, opponentGoals: 0},
    {opponent: 'Liverpool', teamGoals: 5, opponentGoals: 2}
  ],
  get players() {
    return this._players
  },
  get games() {
    return this._games
  },
  addPlayer(newFirstName, newLastName, newAge) {
    let player = {
      firstname: newFirstName,
      lastName: newLastName,
      age: newAge,
    }
    this.players.push(player)
  },
  addGame(newOpponent, newTeamGoals, newOpponentGoals) {
    let game = {
      opponent: newOpponent,
      teamGoals: newTeamGoals,
      opponentGoals: newOpponentGoals,
    }
    this.games.push(game)
  },
}

team.addPlayer('Christian', 'Eriksen', 30);
console.log(team.players);

team.addGame('Manchester City', 1, 0);
console.log(team.games);

