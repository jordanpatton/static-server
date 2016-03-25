/* dependencies */
var express = require('express');

/* configuration */
var STATIC_SERVER_PATH = process.env.STATIC_SERVER_PATH || __dirname;
var STATIC_SERVER_PORT = parseInt((process.env.STATIC_SERVER_PORT || 3000), 10);
if (isNaN(STATIC_SERVER_PORT)) {
  console.log('invalid port:', STATIC_SERVER_PORT);
  process.exit(1);
}

/* server definition */
var app = express();

/* middleware */
app.use('/', express.static(STATIC_SERVER_PATH));
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

/* initialization */
app.listen(STATIC_SERVER_PORT, function() {
  console.log(
    'static-server serving files' +
    '\n' + ' => from: ' + STATIC_SERVER_PATH +
    '\n' + ' => to: http://localhost:' + STATIC_SERVER_PORT +
    '\n' + ' => [ ctrl + c ] to quit'
  );
});
