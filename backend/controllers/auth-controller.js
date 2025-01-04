const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

const home = async (req, res) => {
    try {
        res.send("Welcome to the home page using controllers")
    } catch (err) {
        console.log(err);
        // res.status(500).json({ message: "Server error. Please try again later." });
        next(err)
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body

        //check if any field is empty
        if (!email || !password)
            return res.status(400).json({ message: "Please fill all the fields" })
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({ msg: "Invalid Credentials" })
        }
        //compare the password
        const isPasswordValid = await bcrypt.compare(
            String(password),//the password is converted to a string before hashing
            user.password
        )
        if (!isPasswordValid) {
            return res.status(401).json({ msg: "Useremail or Password is Incorrect" })
        }

        //successful login, return JWT
        res.status(200).json({
            message: "User logged in successfully",
            token: await user.generateToken(),
            userId: user._id.toString(),
        })
    } catch (err) {
        console.error(err);
        // res.status(500).json({ message: "Server error. Please try again later!" })
        next(err)
    }

}

const register = async (req, res) => {
    try {
        // console.log(req.body);//Log the incoming request body

        const { username, email, password, phone } = req.body

        if (!username || !email || !phone || !password) {
            return res.status(400).json({ message: "Please fill all the fields" })
        }

        //check if the user already exists (email)
        const userExists = await User.findOne({ email: email })
        if (userExists) {
            return res.status(400).json({ message: "User already exists" })
        }

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(String(password), saltRounds);//String(password)-the password is converted to a string before hashing.
        //create new user
        const user = await User.create({
            username, email, phone, password: hashedPassword,
        })

        //generate JWT token

        res.status(201).json({ message: "User registered successfully!", createUser: user, token: await user.generateToken(), usrId: user._id.toString(), })
    } catch (err) {
        console.error(err);
        // res.status(500).json({ message: "Server error. Please try again later." });
        next(err)
    }
}

module.exports = { home, register, login }