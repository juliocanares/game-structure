/**
 * Load dependencies
 * ====================================================
 */
var express = require('express');

var app = express();

/**
 * Setup express basic static path
 * ====================================================
 */
app.use(express.static('./public'));

/**
 * Set port from environment variable or a specific number
 * ====================================================
 */
app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function () {
    var baseUrl = 'http://127.0.0.1:' + server.address().port;
    console.log('Express server listening  on ' +  baseUrl);
});
