/* dependencies */
var express = require('express');

/* configuration: path */
var CONFIG_PATH = process.env.CONFIG_PATH || __dirname;
if (CONFIG_PATH.length && CONFIG_PATH[0] === '~') {
  CONFIG_PATH = process.env.HOME + CONFIG_PATH.slice(1);
}

/* configuration: port */
var CONFIG_PORT = parseInt((process.env.CONFIG_PORT || 3000), 10);
if (isNaN(CONFIG_PORT)) {
  console.log('invalid port:', CONFIG_PORT);
  process.exit(1);
}

/* server definition */
var app = express();

/* middleware */
app.use('/', express.static(CONFIG_PATH));
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

/* initialization */
app.listen(CONFIG_PORT, function() {
  console.log(
    'static-server serving files' +
    '\n' + ' => from: ' + CONFIG_PATH +
    '\n' + ' => to: http://localhost:' + CONFIG_PORT +
    '\n' + ' => [ ctrl + c ] to quit'
  );
});
