import User from "../database/models/User.model";
import Jwt from "jsonwebtoken";

export const Signup = async(req, res) => {
    // check if user already exists
    let user = await User.findOne({email: req.body.email});
    if(user) return res.status(400).json({success: false, message: "User already exists"});
    // save user
    user = new User({
        fname: req.body.firstName,
        lname: req.body.lastName,
        email: req.body.email,
        mobile: req.body.mobile,
        password: req.body.password
    })
    await user.save();
    return res.status(200).json({success: true, data: user, message: "Signed up successfully"});
}

export const Signin = async(req, res) => {
    // check if user exists n verify password
    let user = await User.findOne({email: req.body.email});
    if(!user) return res.status(401).json({success: false, message: "Your email or password is wrong"});
    // check if password is corrects
    if(req.body.password != user.password) return res.status(401).json({success: false, message: "Your email or password is wrong"});
    const token = Jwt.sign({_id: user._id, name: user.name, email: user.email}, "PRIVATEKEY22211", {expiresIn: '24h'});
    user = new User({
        email: req.body.email,
        password: req.body.password
    })
    user.save();
    return res.status(200).json({success: true, token: token})
}