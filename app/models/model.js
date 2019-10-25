var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var User = sequelize.define("user", {
  views: {
    type: Sequelize.INTEGER
  }
});

User.sync();

module.exports = User;
