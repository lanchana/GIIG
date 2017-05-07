angular
    .module('GiiG')
    .controller('SkillsEditController', SkillsEditController);

SkillsEditController.$inject = ['$stateParams', '$state', 'skillsService',];

function SkillsEditController($stateParams, $state, skillsService) {
  var vm = this;

  vm.skill = {};

  vm.saveSkill = saveSkill;

  skillsService.getSkill($stateParams.id).then((resp) => {
    vm.skill = resp.data;
    console.log(vm.skill);
  });

  function saveSkill() {
    console.log($stateParams.id, vm.skill);
    skillsService.updateSkill($stateParams.id, vm.skill).then(function(resp) {
      if(resp.status == 200) {
        $state.go('skillsIndex')
      } else {
        alert('Something went wrong when trying to update')
      }
    });
  }
}
