const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");

const park = require("./routes/api/park");

const app = express();

// Middleware
app.use(helmet());
app.use(
  cors({
    origin: "http://localhost:3000"
  })
);
app.use("/uploads", express.static("uploads")); // Sets uploads folder to public
app.use(bodyParser.json());

// MongoDB config og connection
const db = require("./config/keys").mongoURI;

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));

// @routes from routes/api/<name>.js
app.use("/api/park", park);

const port = 5000; // Sets port for server

app.listen(port, () => console.log(`Server started on port ${port}`));
