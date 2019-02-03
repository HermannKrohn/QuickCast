var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var session = require('express-session');
var flash = require('connect-flash');
var firebase = require("firebase");

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// Initialize Firebase -- hidden keys
 var config = {
   apiKey: "AIzaSyB1SDVviGxe7n6fliX7apTmfh9hVzwo6B8",
   authDomain: "quickcast-db.firebaseapp.com",
   databaseURL: "https://quickcast-db.firebaseio.com",
   projectId: "quickcast-db",
   storageBucket: "quickcast-db.appspot.com",
   messagingSenderId: "326042028178"
 };
 firebase.initializeApp(config);


//View Engine
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout:'layout'}));
app.set('view engine', 'handlebars');

//BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

//Express session
app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave: true
}));

//Connect Flash
app.use(flash());

//Global Vars
app.use(function (req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  res.locals.user = req.user || null;
  next();
});

app.use('/', routes);
app.use('/users', users)

app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function(){
  console.log('Server started on port ' + app.get('port'));
});
