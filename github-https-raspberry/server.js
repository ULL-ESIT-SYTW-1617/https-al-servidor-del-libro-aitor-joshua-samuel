var express = require('express');
var passport = require('passport');
var Strategy = require('passport-github').Strategy;
var data = require("./userData.json");
var rename = require('./models/rename');
var github = require('octonode');
var fs = require("fs");
var https = require('https');

rename.renameIndex();

passport.use(new Strategy({
        clientID: data.idClient,
        clientSecret: data.secretClient,
        callbackURL: data.url
    },
    (accessToken, refreshToken, profile, cb) => {
        return cb(null, profile);
    }));

passport.serializeUser((user, cb) => {
    cb(null, user);
});

passport.deserializeUser((obj, cb) => {
    cb(null, obj);
});

var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/_book'));
app.use(require('morgan')('combined'));
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({
    extended: true
}));
app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

app.get('/libro', (req, res) => {
    var client = github.client(data.token);
    var ghorg = client.org(data.org);
    ghorg.publicMember(req.user.username, (err, org) => {
        if (err) {
            console.log(err);
        }
        if (org) {
            res.sendFile(__dirname + '/_book/readme.html');

        } else {
            res.render('fallo', {
                user: req.user
            });
        }
    });

});

app.get('/', (req, res) => {
    res.render('home', {
        user: req.user
    });
});

app.get('/fallo', (req, res) => {
    res.render('fallo', {
        user: req.user
    });
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/login/github', passport.authenticate('github'));

app.get('/login/github/return', passport.authenticate('github', {
    failureRedirect: '/login'
}), (req, res) => {
    res.redirect('/');
});

app.get('/profile', require('connect-ensure-login').ensureLoggedIn(), (req, res) => {
    res.render('profile', {
        user: req.user
    });
});

/*
app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});*/

https.createServer({
        key: fs.readFileSync('./keys/10.6.128.174.key'),
        cert: fs.readFileSync('./keys/10.6.128.174.crt'),
        passphrase: 'sytw'
    }, app)
    .listen(8080, function() {
        console.log('Secure Server listening on port ' + 8080);
    });
