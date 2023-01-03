const router = require('express').Router();
const {loginValidation, regValidation} = require('./validation')
const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const verifyToken = require('./verifyToken')


router.get('/register', verifyToken, (req, res) => {
    res.send("we are at register route, Method = Get")
})


router.post('/register', async (req, res) => {

    const {name, email, password, address} = req.body;

    const {error} = regValidation(req.body)
    if (error) return res.send(error.details[0].message)


    const salt =  await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);


    const userExist = await User.findOne({email: email})
    if(userExist) return res.status(400).send("Email Already Exists");


    const user = new User({
        name,
        email,
        password : hash,
        address
    })
    // console.log(user)
    try {
        const savedUser = await user.save()
        res.json(savedUser)

    } catch (error) {
        res.status(400).send(error)
    }

})


router.patch('/register', (req, res) => {

})


router.delete('/register', (req, res) => {

})



// =======================================================
               // Login Routers
// =======================================================

router.get('/login',  (req, res) => {

})


router.post('/login', async (req, res) => {

    const { email, password } = req.body


    const user =  await User.findOne({email: email})
    if(!user) return res.status(400).send("Email or Password not Matched")


    const isPasswordMatched = await bcrypt.compare(password, user.password)
    if(!isPasswordMatched) return res.status(400).send("Email or Password not Matched")

    const token = jwt.sign({email: user.email}, process.env.TOKEN_SECRET);

    res.header("auth-token", token).send()
})


router.patch('/login', (req, res) => {

})


router.delete('/login', (req, res) => {

})

module.exports = router