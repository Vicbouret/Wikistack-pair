const express = require("express");
const addPage = require("../views/addPage");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("Hello World");
});

router.post("/", (req, res, next) => {});

router.get("/add", (req, res, next) => {
  res.send(addPage());
});

module.exports = router;
