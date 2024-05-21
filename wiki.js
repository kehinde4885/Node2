//Router

const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("You have reached home Page of the Wiki");
});

router.get("/about", (req,res) => {
  try {
    res.send("You have reached the about page of the Wiki");
  } catch {
    console.log("Error occured when sending response");
  }
});

//export file as Module

module.exports = router;
