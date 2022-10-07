// Dependency
const express = require("express");

const app = express();

// Creates the localhost port
const PORT = process.env.PORT || 3001;

// Tells express to create a route for every file in the "public" folder and give it a "/" route. Directs the user to the index.html when the server is started
app.use(express.static("public"));

// Starts the server
app.listen(PORT, () => {
  console.log(`Server available at localhost:${PORT}`);
});
