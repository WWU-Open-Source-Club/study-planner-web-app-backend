/* Authors: Timothy S. Poehlman, [ADD YOUR NAME HERE IF YOU MODIFY THIS PROGRAM] */

/* User - A single user
 * Id: User ID
 * Username: The username of the user
 * Email: The email used to sign up, this can later be attributed to a google auth
 * Passsword: The password of the user
 * 
 * NOTE: We MUST ensure that the password is encrypted.  My reccomendation is to use bcrypt to encrypt the password before storing,
 * link to a tutorial on use is here: https://coderwall.com/p/1pn7cg/correct-way-to-store-passwords-in-node-js
 */
module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("User", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    username: {
      type: Sequelize.STRING,
      nullable: false,
      unique: true
    },
    email: {
      type: Sequelize.STRING,
      nullable: false,
      unique: true
    },
    password: {
      type: Sequelize.BOOLEAN,
      nullable: false
    },
    // calendar : {
    //   type: Sequelize.relationship('Calendar')
    // }
  });

  return User;
};

/* Event - a single calendar event
 * Id: Event Id
 * Title: The title of the event
 * Date: The day that the event occurs
 * Time: The time that the event occurs
 * Description: A short description of the event, can be null
 * Availability: The status of the event eg: Busy(1), Available(0)
 */
module.exports = (sequelize, Sequelize) => {
  const Event = sequelize.define("Event", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    title: {
      type: Sequelize.STRING,
      nullable: false
    },
    date: {
      type: Sequelize.STRING,
      nullable: false
    },
    description: {
      type: Sequelize.BOOLEAN,
      nullable: true
    },
    availability: {
      type: Sequelize.BOOLEAN,
      nullable: false,
      default: false
    }
  });

  return Event;
};

/* Calendar - a collection of events
 * Id: Calendar Id
 * Owner: The userId of the owner of the calendar
 * Title: The title of the calendar
 * Description: A short description of the calendar, can be null
 * Events: A relationship consisting of all events that are tied to this calendar.  The relationship is 
 * many events to one calendar - this is set outside of the const
 */
module.exports = (sequelize, Sequelize) => {
  const Calendar = sequelize.define("Calendar", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    owner: {
      type: Sequelize.INTEGER,
      nullable: false
    },
    title: {
      type: Sequelize.STRING,
      nullable: false
    },
    description: {
      type: Sequelize.STRING,
      nullable: true
    }
  });

  return Calendar;
};