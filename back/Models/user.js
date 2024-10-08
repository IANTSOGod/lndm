const DataTypes = require("sequelize");
const sequelize = require("../Config/database");

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    nom: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    prenoms: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    mdp: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { tableName: "user", timestamps: false }
);

module.exports = User;
