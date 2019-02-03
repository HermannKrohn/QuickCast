var express = require('express');
var router = express.Router();
var axios = require('axios');
var passport =require('passport');
var LocalStrategy = require('passport-local').Strategy;


//Register
router.get('/register', function(req, res){
	res.render('register');
});

//Login
router.get('/login', function(req, res){
	res.render('login');
});

//Register User
router.post('/register', function(req, res){
	var name = req.body.name;
	var email = req.body.email;
	var username = req.body.username;
	var password = req.body.password;
	var password2 = req.body.password2;

	//Validation
	req.checkBody('name', 'Name is Required').notEmpty();
	req.checkBody('username', 'Username is Required').notEmpty();
	req.checkBody('email', 'Email is Required').notEmpty();
	req.checkBody('email', 'Email not valid').isEmail();
	req.checkBody('password', 'Password is Required').notEmpty();
	req.checkBody('password2', 'Passwords do not match').equals(password);

	var errors = req.validationErrors();

	if(errors){
		res.render('register',{
			e: errors
		});
	}

	//create string url here
	var url = ('https://hermannkrohn.lib.id/qhaxx-music-api@dev/?name=' + name + '&username=' + username + '&email=' + email + '&password=' + password);

	axios.get(url);

	res.redirect('login');

});

router.post('/login', function(req, res){
	var username = req.body.username;
	var password = req.body.password;

	var url = ('https://hermannkrohn.lib.id/qhaxx-music-api@dev/login/?username=' + username + '&password=' + password);

	if(url){
		res.redirect('../');
	}
});

module.exports = router;
