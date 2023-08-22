const skills = [
  { id: 1, skill: "HTML" },
  { id: 2, skill: "CSS" },
  { id: 3, skill: "Javascript" },
];

module.exports = {
  getAll: function () {
    return skills;
  },
  addSkill: function (newSkill) {
    skills.push(newSkill);
  },
  deleteOne: function (id) {
    id = parseInt(id);
    // Find the index based on the id of the skill object
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
}
}
