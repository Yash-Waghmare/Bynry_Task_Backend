const userService = require('../services/user.services');

exports.register = async(req, res, next) => {
    try {
        const {username, email, password} = req.body;

        const successRes = await userService.registerUser(username, email, password);

        res.json({status:true, success:"User registered successfully"});
    } catch (error) {
        throw error;
    }
}

exports.login = async(req, res, next) => {
    try {
        const {email, password} = req.body;

        const user = await userService.checkUser(email);
        if(!user){
            throw new Error("User not found");
        }

        const isValid = await user.isValidPassword(password);
        if(isValid === false){
            throw new Error("Invalid password");
        }

        let tokenData = {_id:user._id, email:user.email, username:user.username};

        const token = await userService.generateToken(tokenData, "secretKey", '1h');

        res.status(200).json({status:true, token:token})


        
    } catch (error) {
        throw error;
    }
}