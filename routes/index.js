const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");
const skillsDb = require("../data/skills-db");

router.get("/", function (req, res, next) {
  res.render("skills/index");
});

// add a new skill
router.post("/post", (req, res) => {
  // const currentSkill = req.body;
  console.log(skillsDb);
  if (skillsDb.length > 0) {
    let lastId = skillsDb[skillsDb.length - 1].id;
    console.log(lastId);
    const id = parseInt(lastId) + 1;
  } else {
    const id = 10;
  }
  //create new note object
  let newSkill = {
    skill: req.body.skill,
    id: id,
  };
  skillsDb.addSkill(newSkill);
  res.redirect("/skills");
});

module.exports = router;
