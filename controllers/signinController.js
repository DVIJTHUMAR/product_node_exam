
const userModel = require("../models/userSchema.js");
const jwt = require('jsonwebtoken')

const login = (req, res) => {
    try {
        res.render("signin");
    } catch (error) {
        console.log('Error', error);
    }
}

const signinController = async (req, res) => {
    try {
        const { email, password } = req.body;

        const userLogin = await userModel.findOne({ email });

        console.log("user login", userLogin);

        if (!userLogin) {
            return res.json({ msg: "user not founded.... go to signUp " })
        } else {
            if (password == userLogin.password) {
                const token = jwt.sign({ id: userLogin.id, email: userLogin.email }, process.env.SECRET_KEY);

                console.log("token login",token);

            res.json({msg:"Login Sucssesfully....",token}) 

            }else{
                res.json({msg: 'Password is incorrect'});
            }
        }

    } catch (error) {

        console.log('err', error);
        res.json({ msg: "somthing  went wrong 404/login!" });
    }
}

module.exports = { signinController ,login};