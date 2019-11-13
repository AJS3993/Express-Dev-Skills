const skills = [
  {skill: 'Javascript'},
  {skill: 'Html'},
  {skill: 'css'}
];
  
  module.exports = {
    getAll, getOne
  };
  
  function getAll() {
    return skills;
  }

  function getOne(id){
    return skills[id];
  }