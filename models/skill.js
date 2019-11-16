const skills = [
  {skill: 'Javascript'},
  {skill: 'Html'},
  {skill: 'css'}
];
  
  module.exports = {
    getAll, 
    getOne,
    create
  };
  
  function getAll() {
    return skills;
  }

  function getOne(id){
    return skills[id];
  }

  function create(skill) {
    skills.push(skill);
  }