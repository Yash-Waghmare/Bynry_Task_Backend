const userModel = require('../model/user.model');
const jwt = require('jsonwebtoken');

class userService{
    static async registerUser(username, email, password){
       try {
            const createUser = new userModel({username, email, password});
            return await createUser.save();
       } catch (error) {
            console.error(error);
       }
    }

    static async checkUser(email, password){
            try {
               return await userModel.findOne({email});
          } catch (error) {
               throw error;
          }
     }

     static async generateToken(tokanData, secretKey, jwt_expire){
            return jwt.sign(tokanData, secretKey, {expiresIn: jwt_expire});
     }
}

module.exports = userService;