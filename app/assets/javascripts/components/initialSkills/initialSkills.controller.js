angular
  .module('GiiG')
  .controller('InitialSkillsController', InitialSkillsController);

InitialSkillsController.$inject = ['$state', 'initialSkillsService'];

function InitialSkillsController($state, initialSkillsService) {
  var vm = this;

  vm.skills = [];
  vm.skills[0] = "";
  vm.skills[1] = "";
  vm.skills[2] = "";
  vm.skills[3] = "";
  vm.skills[4] = "";

  skill = {
     position_type: '',
     rating: '0.0'  
   };
  vm.saveSkills = saveSkills;

  function saveSkills() {
  console.log (vm.skills);

    if (vm.skills[0]) {
      skill.position_type = "Prep Cook";
      initialSkillsService.postSkills(skill)
        .then(function (response) {
          if(response.status == 201) {
            console.log("prep cook added");
          } else {
            alert('server is down')
          }
        })
    }

    if (vm.skills[1]) {
      skill.position_type = "Busboy";
      initialSkillsService.postSkills(skill)
        .then(function (response) {
          if(response.status == 201) {
            console.log("Busboy added");
          } else {
            alert('server is down')
          }
        })
    }
    if (vm.skills[2]) {
      skill.position_type = "Dishwasher";
      initialSkillsService.postSkills(skill)
        .then(function (response) {
          if (response.status == 201) {
            console.log("Dishwasher added");
          } else {
            alert('server is down')
          }
        })
    }
    if (vm.skills[3]) {
      skill.position_type = "Server";
      initialSkillsService.postSkills(skill)
        .then(function (response) {
          if(response.status == 201) {
            console.log("Server added");
          } else {
            alert('server is down')
          }
        })
    }
    if (vm.skills[4]) {
      skill.position_type = "Foodrunner";
      initialSkillsService.postSkills(skill)
        .then(function (response) {
          if(response.status == 201) {
            console.log("Foodrunner added");
          } else {
            alert('server is down')
          }
        })
    }
    $state.go('jobseeker');  
  }
}
 
