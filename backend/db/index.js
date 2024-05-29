const mongoose = require('mongoose');
const MONGO_USERNAME = process.env.MONGO_USERNAME || 'root';
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || 'example';
const MONGO_HOSTNAME = process.env.MONGO_HOSTNAME || 'localhost';
const MONGO_PORT = process.env.MONGO_PORT || 27017;
const MONGO_DATABASE_NAME = process.env.MONGO_DATABASE_NAME ||'task-management';
let MONGO_URI = process.env.MONGO_URI;
/**
 * placeholder for jsdoc documentation
 **/
async function connect() {
  // return new Promise((resolve, reject) => {
  MONGO_URI = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DATABASE_NAME}?authSource=admin`;
  mongoose.set('strictQuery', true);
  mongoose.connect(MONGO_URI,
      {useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(function(res, err) {
        if (err) {
          console.log(err);
        }
        return (res);
      });

  // });
}

/**
 * placeholder for jsdoc documentation
 * @return {type}
 **/
function close() {
  return mongoose.disconnect();
}

module.exports = {connect, close};
