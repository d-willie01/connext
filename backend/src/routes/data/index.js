const express = require('express');
const dataRouter = express.Router();
const {getNBA} = require('./getNBA')



dataRouter.get("/NBA", getNBA);

module.exports = dataRouter