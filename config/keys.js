const Password = require("./keys_private").Password;

module.exports = {
  mongoURI:
    "mongodb+srv://adminUser:" +
    Password +
    "@cluster0-zqdft.mongodb.net/test?retryWrites=true&w=majority"
};

// mongodb: is the protocol definition
// localhost: 27017 is the server we are connecting to
// /myproject: is the database we wish to connect to

// https://mongodb.github.io/node-mongodb-native/2.0/tutorials/connecting/
