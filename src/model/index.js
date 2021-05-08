const User = require ("./user");
const Task = require ("./task");

User.hasMany(Task, {foreignKey: {name:"userId"}});

Task.belongsTo(User, {foreignKey: {name:"userId"}});
module.exports = {
    User,
    Task
}

