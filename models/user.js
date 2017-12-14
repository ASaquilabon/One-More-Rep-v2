module.exports = function (sequelize, DataTypes) {
  var UserData = sequelize.define("UserData", {
    // Giving the UserData model a name of type STRING
    name: DataTypes.STRING
  });
  return UserData;
};
