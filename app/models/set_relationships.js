/* SET RELATIONSHIPS */

// NOTE: not 100% sure if this is how it works properly, using this link as a reference a second pair of eyes would be nice:
// https://levelup.gitconnected.com/table-relationships-in-sequelize-2e2533580c2a


const db = require("../models")

// add Calendar id foreign key to all events
db.Event.belongsTo(db.Calendar, { foreignKey: 'calendar_id'});
db.Calendar.hasMany(db.Event, {foreignKey: 'calendar_id'});