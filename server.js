require("dotenv").config();

const express = require("express");
const app = express();
const routes = require("./routes/routes");
const bodyParser = require("body-parser");
const path = require("path");
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());

// app.use(express.static("/app/public/"));

app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,HEAD,OPTIONS,POST,PUT,DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
  );
  next();
});

app.use(routes);

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("app/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "app", "build", "index.html"));
  });
}

app.listen(PORT, () => console.info(`Server has started on ${PORT}`));
