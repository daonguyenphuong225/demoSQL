const Sequelize = require('sequelize');

const sequelize = new Sequelize("firstconnection","root","123nânna",{
    host: "localhost",
    dialect: "mysql",
    logging: true,
    sync: true
});
sequelize.sync();

module.exports = sequelize;