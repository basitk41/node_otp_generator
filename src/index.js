require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./models");

const app = express();
app.use(cors());
app.use(express.json());
require("./routes")(app);

db.sequelize.sync().then(() => {
  console.log("Drop and re-sync db.");
});
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log(`Server is listening on ${PORT}...`));
