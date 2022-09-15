const User = require('../../models/users')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const secret = process.env.JWT_TOKEN


module.exports = {
    createUser: async(req, res) => {
        const { name, email, password } = req.body
        const user = new User({ name, email, password })

        const userExist = await User.findOne({ email }) || ''

        if (user.email == userExist.email) {
            return res.status(405).json({ error: 'User already exists' })
        }

        try {
            await user.save()
            res.status(201).send(user)
        } catch (error) {
            res.status(500).json({ error: 'Error register user' })
        }
    },

    loginUser: async(req, res) => {
        const { email, password } = req.body

        try {
            let user = await User.findOne({ email })
            if (!user) {
                return res.status(401).json({ error: 'Invalid user email' })
            } else {
                user.isCorrectPassword(password, function(err, same) {
                    if (!same) {
                        res.status(401).json({ error: 'Invalid user password' })
                    } else {
                        const token = jwt.sign({ email }, secret, { expiresIn: '30d' })
                        res.status(200).json({ user, token })
                    }
                })
            }
            
        } catch (err) {
            res.status(500).json({ error: 'Error register user' })
        }
    }
}