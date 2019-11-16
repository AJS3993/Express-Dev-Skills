const skills = [
  {skill: 'Javascript'},
  {skill: 'Html'},
  {skill: 'css'}
];
  
  module.exports = {
    getAll, 
    getOne,
    create,
    deleteOne
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

  function deleteOne(id) {
    skills.splice(id, 1);
  }