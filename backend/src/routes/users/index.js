const express = require('express');
const usersRouter = express.Router();
const {getSelf} = require('./getSelf')



usersRouter.get("/self", getSelf);

module.exports = usersRouter