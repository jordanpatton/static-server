/* dependencies */
var express = require('express');

/* configuration */
var CONFIGURATION_PORT = parseInt((process.env.PORT || 3000), 10);
if (isNaN(CONFIGURATION_PORT)) {
  console.log('invalid port:', CONFIGURATION_PORT);
  process.exit(1);
}

/* server definition */
var app = express();

/* middleware */
app.use('/', express.static(__dirname));
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

/* initialization */
app.listen(CONFIGURATION_PORT, function() {
  console.log(
    'development http server running at' +
    '\n' + ' => http://localhost:' + CONFIGURATION_PORT +
    '\n' + ' => [ ctrl + c ] to quit'
  );
});
