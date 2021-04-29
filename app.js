const express = require("express");
const morgan = require("morgan");
const html = require("./views/layout");
const { db, Page, User } = require("./models");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(express.static("./public"));

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
