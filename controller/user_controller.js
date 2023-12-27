const User = require('../models/userSchema');

module.exports.register = async (req, res) => {
    
    try {
        const user = await User.create(req.body);
        if(user){
            return res.status(200).json({
                message: 'User registered successfully',
                user
            })
        }
        
    } catch (error) {
        console.log('Error in creating User', error);
        return res.status(400).json({
            message: 'Error in creating User',
            error
        });
    }
}

module.exports.createSession = function(req, res){
    console.log('Login successful');
    return res.redirect('/get-submissions');
}