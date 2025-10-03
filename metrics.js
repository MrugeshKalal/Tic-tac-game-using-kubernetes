const client = require('prom-client');

// Create a Registry to register metrics
const register = new client.Registry();

// Define custom metrics
const gameCounter = new client.Counter({
  name: 'games_played_total',
  help: 'Total number of games played',
});

const winCounter = new client.Counter({
  name: 'games_won_total',
  help: 'Total number of games won',
});

const drawCounter = new client.Counter({
  name: 'games_drawn_total',
  help: 'Total number of games drawn',
});

// Register metrics
register.registerMetric(gameCounter);
register.registerMetric(winCounter);
register.registerMetric(drawCounter);

// Collect default metrics
client.collectDefaultMetrics({ register });

module.exports = { register, gameCounter, winCounter, drawCounter };
