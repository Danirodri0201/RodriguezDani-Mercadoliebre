const path = require("path");
const express = require("express");
const app = express();

const publicPath = path.join(__dirname, "../public");
const static = express.static(publicPath);
app.use(static);

app.listen(3001, () => {
  console.log("Servidor corriendo en el puerto 3001");
});
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views/home.html"));
});
app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "views/register.html"));
});
app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "views/login.html"));
});
