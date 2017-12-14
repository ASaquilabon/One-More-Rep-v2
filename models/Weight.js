// sequelize is an ORM that creates a table "weight" off of a model ???

module.exports = function (sequelize, DataTypes) {
    var Weight = sequelize.define("Weight", {
        weight: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1,4]
            }
        },
    });
    return Weight;
}