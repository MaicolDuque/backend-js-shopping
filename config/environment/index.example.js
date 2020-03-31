/**
 * Default specific configuration
  * @author: Maicol Felipe Duque Urrea <maicolduque01@gmail.com>
 */

const all = {
  env: process.env.NODE_ENV,

  // Server port
  port: process.env.PORT || 8080,

  // Server IP
  ip: process.env.IP || '127.0.0.1',

  // Should we populate the DB with sample data?
  seedDB: false,

  // Secret for session, you will want to change this and make it an environment variable
  secrets: {
    session: 'w0rksh0p-full5tack-j4v45cr1pt',
  },

  email: {
    user: "correo@gmail.com",
    pass: "xxxxx"
  },

  // MongoDB connection options
  mongo: {
    uri: process.env.MONGODB_URI || 'url mongodb atlas',
    db: 'name-db',
  },
};

module.exports = all;
