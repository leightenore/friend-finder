const express = require("express");

const app = express();

const PORT = process.env.PORT || 8080;

const apiRoute = require("./app/routing/apiRoutes.js");
const htmlRoute = require("./app/routing/htmlRoutes.js");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('./app/public'));

app.use("/api", apiRoute);
app.use("/", htmlRoute);

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
