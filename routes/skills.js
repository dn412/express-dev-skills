const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

const skillsDb = require("../data/skills-db");
/* GET skillss listing. */

router.get("/skills", function (req, res) {
  res.render("skills/show", {
    skills: skillsDb.getAll(),
  });
});

// delete skill
//router.post('/', skillsCtrl.create);
// new route below
//router.delete('/:id', skillsCtrl.delete); 
//delete: deleteSkill 
//};
	
//function deleteSkill(req, res) {
 // Skill.deleteOne(req.params.id);
//  res.redirect('/skills');
//}
module.exports = router;
