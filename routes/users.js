const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  "Hello World";
});

module.exports = router;
