const express = require("express");

const app = express();
const port = 8000;

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
