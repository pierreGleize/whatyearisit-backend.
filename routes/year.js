var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", (req, res) => {
  const newDate = new Date();
  const year = newDate.getFullYear().toString();
  res.json({ year: year });
});

module.exports = router;
