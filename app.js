const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('./config/db');
const taskRoutes = require('./routes/task.routes');
const errorHandler = require('./middleware/errorHandler');

dotenv.config();

const app = express();

app.use(express.json());
app.use('/tasks', taskRoutes);
app.use(errorHandler);

module.exports = app;
