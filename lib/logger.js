var winston = require('winston');
// winston.handleExceptions(new winston.transports.Console({ colorize: 'all', json: true }));

var transport = new winston.transports.Console({
  colorize: 'all'
});

module.exports  = new winston.Logger({
  transports: [ transport ]
});