//const Password = require("./keys_private").Password;
const dotenv = require("dotenv");
dotenv.config();


const Password = process.env.Password;
module.exports = {
  mongoURI:
    "mongodb+srv://admin:" +
    Password +
    "@cluster0-prell.mongodb.net/test?retryWrites=true&w=majority"
};
