const router = require('express').Router();

const userService = require('../services/usersService');


router.post('/', async (req, res) => {
    try {
        // const { userName, manufacturerID } = req.params;
        await userService.insert(req.body);
        res.json({ message: "User Successfully added" })

    }
    catch (err) {
        res.status(422).json({ message: err });
    }

})
module.exports = router;