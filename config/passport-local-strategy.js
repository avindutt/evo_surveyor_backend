const passport = require('passport');
const User = require('../models/userSchema');
const LocalStrategy = require('passport-local').Strategy;

// authentication using passport
passport.use(new LocalStrategy({
        usernameField: 'email'
    },
    function(email, password, done){
        // find a user and establish identity
        User.findOne({ email: email })
        .exec()
        .then((user) => {
          if (!user || user.password !== password) {
            console.log('Invalid Username/Password');
            return done(null, false);
          }

          return done(null, user);
        })
    }
));


// telling the passport to only keep user.id in the cookie and not all the information as we want to decrypt user.id only
passport.serializeUser(function(user, done){
    done(null, user.id);
});

// decrypting the encrypted user.id from cookie (so that user doesn't have to sign in everytime) when browser sends requests again and again
passport.deserializeUser(function(id, done){  // and here this 'id' is coming from request created by browser
    User.findById(id, function(err, user){
        if(err){return done(err);}

        return done(null, user);
    });
});


// checking if the user is authenticated
passport.checkAuthentication = function(req, res, next){

    if(req.isAuthenticated()){
        return next();
    }
    return res.status(401).json({ message: 'Unauthorized' });
}

passport.setAuthenticatedUser = function(req, res, next){
    if(req.isAuthenticated()){
    // req.user contains current logged in user from session cookie and now it is given to response(locals) for using in views
     res.locals.user = req.user;
    }
    next();
}