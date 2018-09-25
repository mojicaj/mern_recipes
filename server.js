require("dotenv").config();

const express = require("express");
const app = express();
const routes = require("./routes/routes");
const bodyParser = require("body-parser");
const path = require("path");
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());

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
