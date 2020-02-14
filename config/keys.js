const Password = require("./keys_private").Password;

module.exports = {
  mongoURI:
    "mongodb+srv://admin:" +
    Password +
    "@cluster0-prell.mongodb.net/test?retryWrites=true&w=majority"
};
