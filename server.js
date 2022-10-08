// Dependency
const express = require("express");
const app = express();

// Creates the localhost port using the required port if there is one and if not then it will use port 3001
const PORT = process.env.PORT || 3001;

// Modularized routes
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());
// Tells express to create a route for every file in the "public" folder and give it a "/" route. Directs the user to the index.html when the server is started
app.use(express.static("public"));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// Starts the server
app.listen(PORT, () => {
  console.log(`Server available at localhost:${PORT}`);
});
