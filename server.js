/* Authors: Timothy S. Poehlman, [ADD YOUR NAME HERE IF YOU MODIFY THIS PROGRAM]
 * template credits: https://bezkoder.com/node-express-sequelize-postgresql/
 */
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// db
const db = require("./app/models");
//force true will drop the table and reconstruct, when you need to reconstruct uncomment this one and recomment other
db.sequelize.sync();
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Study Planner Web Application." });
});

require("./app/routes/profile.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
