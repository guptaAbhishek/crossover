var express = require('express');
var app = express();
var http = require('http');
// var reload = require('reload');
// var logger = require('morgan');
// var watch = require('watch');
// var fs = require('fs');
// var flash    = require('connect-flash');
// var passport = require('passport');
// var configDB = require('./config/database.js');
// var config = require('./config/config');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
// var session      = require('express-session');
// var compression = require('compression');
// var jwt = require('jsonwebtoken');

app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser()); // get information from html forms
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(compression())

app.use('/public',express.static(__dirname + '/public'));

// configuration ===============================================================
// var knex = require('knex')(configDB); // connect to our database
// var bookshelf = require('bookshelf')(knex);
// app.set('bookshelf', bookshelf);
//
// require('./config/passport')(app,passport); // pass passport for configuration


// app.set('superSecret',config.secret);
// For serving static content using express
// required for passport
// app.use(session({
//     secret: 'appsecret',
//     resave: false,
//     saveUninitialized: true,
//     cookie: {
//         secure: true,
//         maxAge: new Date(Date.now() + 3600000)
//     }
// }));
// app.use(passport.initialize());
// app.use(passport.session()); // persistent login sessions
// app.use(flash()); // use connect-flash for flash messages stored in session



app.set('port',process.env.PORT || 3000);
app.set('views',__dirname+'/public');
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.engine('html', require('ejs').renderFile)


app.get('*',function (req, res) {
    res.render('index.html');
});


var server = http.createServer(app);


server.listen(app.get('port'), function () {
    console.log('Example app listening on port ! '+ app.get('port'));
});
