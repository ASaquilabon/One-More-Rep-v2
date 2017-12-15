module.exports = function (sequelize, DataTypes) {
  var UserData = sequelize.define("UserData", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    goal: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    startingWeight: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1]
      
      }
    },
  });
  // Post.associate = function (models) {
  //   Weight.belongsTo(models.Post, {
  //     foreignKey: {
  //       allowNull: false
  //     },
  //     onDelete: 'CASCADE'
  //   });
  // };
  return UserData;
};
