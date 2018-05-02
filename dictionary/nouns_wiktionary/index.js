const feminine = require('./feminine');
const maskuline = require('./maskuline');
const neuter = require('./neuter');

module.exports = [...feminine, ...maskuline, ...neuter];
