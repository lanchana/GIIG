angular
  .module('GiiG')
  .controller('SkillsIndexController', SkillsIndexController);

SkillsIndexController.$inject = ['skillsService'];

function SkillsIndexController(skillsService) {
  var vm = this;

  vm.skills = [];

  skillsService.getSkills().then(function(response) {
    vm.skills = response.data;
  });
}
