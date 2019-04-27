const router = require('express').Router();
const authService = require('../services/authService');

router.post('/login', async (req, res) => {
    try {

        const { username, password } = req.body;
        await authService.login(username, password)
        res.json({ token: "generated" })
        console.log(req.body)
    }
    catch (err) {
        res.status(401).json({ message: err });
    }
})

module.exports = router