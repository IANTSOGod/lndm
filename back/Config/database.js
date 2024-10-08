const Sequelize = require("sequelize");

module.exports = new Sequelize("lndm", "nouvel_utilisateur", "mot_de_passe", {
  host: "localhost",
  dialect: "mysql",
});
