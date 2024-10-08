const express = require("express");
const cors = require("cors");
const sequelize = require("./Config/database");
const User = require("./Models/user");
const app = express();

app.use(cors());
app.use(express.json());
sequelize
  .authenticate()
  .then(() => console.log("connexion réussie"))
  .catch((error) => console.log(error));
  
app.get("/api/list", async (req, res) => {
  try {
    const response = await User.findAll();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error);
  }
});

app.get("/", (req, res) => {
  res.status(200).json({ message: "hello" });
});

app.listen(3000, () => {
  console.log("Serveur démarré");
});
