const route = require("express").Router();

const UserRouter = require('./user')
const TaskRouter = require('./task')

route.use(UserRouter);
route.use(TaskRouter);

module.exports = route;