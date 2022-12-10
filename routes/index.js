const express = require("express");
const router = express.Router();

router.get("/demo", async (req, res) => {
  let { x, y, z } = req.query;

  if (!x || !y || !z) {
    return res.status(400).json({ errorMessage: "x ,y and z values are empty" });
  }
  try {
    console.log("hello");
    console.log(x);
    let pow = Math.pow(x, y);

    if (pow > z) {
      console.log("higher than expected");
    } else {
      console.log(pow);
    }

    console.log("done");

    res.status(200).json({ message: "success" });
  } catch (err) {
    res.status(400).json({ error_message: err });
  }
});

module.exports = router;
