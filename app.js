const path = require("path");
const express = require("express");
const app = express();

app.set("port",process.env.PORT || 3010)

app.listen(app.get("port"), () => console.log("Start Server"))

app.use(express.static(path.resolve(__dirname, "./public")));
app.listen(3000, () => console.log("Server starts in https://localhost:3010") + app.get("port"));

app.get("/", (req, res) =>
  res.sendFile(path.resolve(__dirname, "./views", "home.html"))
);

app.get("/register", (req, res) =>
  res.sendFile(path.resolve(__dirname, "./views", "register.html"))
);

app.get("/login", (req, res) =>
  res.sendFile(path.resolve(__dirname, "./views", "login.html"))
);