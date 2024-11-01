const express = require('express');

const parkingUserController = require('../../controllers/parkingUser.controller');

const router = express.Router();

router.get('/', parkingUserController.getUsers);

module.exports = router;
