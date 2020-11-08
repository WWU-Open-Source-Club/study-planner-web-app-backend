/* Authors: Timothy S. Poehlman, [ADD YOUR NAME HERE IF YOU MODIFY THIS PROGRAM]
 * NOTE: This is an example config file that is required.  
 * Either rename your local copy to db.config.js or change the code in ../models/index.js to reflect the name change
 */

module.exports = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "YOURPASSWORDHERE",
  DB: "study-planner-db",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};