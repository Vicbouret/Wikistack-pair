const morgan = require("morgan");
const express = require("express");
const wiki = require("./routes/wiki");
const html = require("./views/layout");
const users = require("./routes/users");
const { db, Page, User } = require("./models");
const port = 3000;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(express.static("./public"));
app.use("/wiki", wiki);
app.use("/users", users);

db.authenticate().then(() => {
  console.log("connected to the database. Hooray!");
});

async function dbSync() {
  // await Page.sync({ force: true });
  // await User.sync({ force: true });
  await db.sync();
}

app.get("/", (req, res) => {
  res.send(html());
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

dbSync();
