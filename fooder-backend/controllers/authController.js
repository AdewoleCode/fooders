const User = require('../models/UserModel')
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')

// register

const register = async (req, res) => {
    try {

        const { username, email, password } = req.body

        if (!username || !email || !password) {
            throw new Error("please provide username, email and password to continue")
        }

        if (password.length < 6) {
            throw new Error("password must be more than 6 character!")
        }


        const isExisting = await User.findOne({ email })
        if (isExisting) {
            throw new Error("Already such an account with this EMAIL. Try a new one!")
        }

        const existingUsername = await User.findOne({ username })
        if (existingUsername) {
            throw new Error("Already such an account with this USERNAME. Try a new one!")
        }


        const newUser = await User.create({ username, email, password })

        const token = jwt.sign({ id: newUser._id, isAdmin: newUser.isAdmin }, process.env.JWT_SECRET, { expiresIn: '5h' })

        if (newUser) {
            const { username, _id, email } = newUser
            res.status(201).json({ username, _id, token, email })
        } else {
            throw new Error("invalid user data!")
        }
    } catch (error) {
        return res.status(500).json(error.message)
    }
}

// login
const login = async (req, res) => {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            throw new Error("please provide email and password")
        }
        const user = await User.findOne({ email })
        if (!user) {
            throw new Error("User not found, please register!")
        }

        // 123456, [lkoiuytfdrse5rd6tfgyhijopk[l;]'\[pkojiugyftdrzsdxtfycghu]]
        const comparePass = await bcrypt.compare(password, user.password)
        if (!comparePass) {
            throw new Error("User credentials are wrong!")
        }

        const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT_SECRET, { expiresIn: '5h' })


        if (user && comparePass) {
            const { username, _id, email } = user
            res.status(200).json({ username, _id, email, token })
        } else {
            throw new Error("User credentials are wrong!")
        }


    } catch (error) {
        return res.status(500).json(error.message)
    }
}


module.exports = { login, register };
