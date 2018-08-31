const express = require('express');
var Routes = express.Router();

var studentRoutes = require('./Routes/studentRoutes');

Routes.use('/student/', studentRoutes);

module.exports = Routes;