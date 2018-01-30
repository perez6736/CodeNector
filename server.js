const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require('mongoose');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const expressValidator = require('express-validator');
const flash = require('connect-flash');
const session = require('express-session');
const LocalStrategy = require('passport-local').Strategy;
const bodyParser = require('body-parser');

//connect to the db
mongoose.connect('mongodb://localhost/CodeNector');
const db = mongoose.connection;


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//middleware 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//this is for important for login stuff
app.use(require('express-session')({
  secret: "secret String here - be sure to make this hidden when we go live",
  resave: false,
  saveUninitialized: false
}));

// Passport init
app.use(passport.initialize());
app.use(passport.session());

// Youtube told me to do this. 
app.use(expressValidator({
  errorFormatter: function(param, msg, value){
    var namespace = param.split('.')
    , root = namespace.shift()
    , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param: formParam,
      msg: msg,
      value: value
    };
  }
}));

app.use(flash());
app.use(function (req, res, next){
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});

//configure passport. 
// const User = require('/model/user');
// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

// app.post('/login', passport.authenticate('local'), function(req, res) {
//     // If this function gets called, authentication was successful.
//     // `req.user` contains the authenticated user.
//     res.redirect('/users/' + req.user.username);
//   });

app.post('/register', function(req, res) {
  // handle user information when they sign up
  console.log(req.body);
  // validation example. 
  // var name = req.body.name; 
  
  // req.checkBody('name', 'Name is required').notEmpty();
  // var errors = req.validationErrors();
  // if(errors){
  //   console.log('There was a validation error');
  // } else{
  //     console.log("no errors");
  //   }
});

app.post('/login', function(req, res) {
  // handle the user name and pw when they try to login 
  // check for username
  // check if pw is correct 
  // then direct user to main landing page. 
  console.log("posted to login with " + req.body);
});

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});

