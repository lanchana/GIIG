angular
  .module('GiiG')
  .controller('SkillsIndexController', SkillsIndexController);

SkillsIndexController.$inject = ['skillsService'];

function SkillsIndexController(skillsService) {
  var vm = this;

  vm.skills = [];
  vm.skillDelete = skillDelete;

  activate();

  function  activate() {
  skillsService.getSkills().then(function(response) {
    vm.skills = response.data;
  });
}

function skillDelete(skill_id) {
    console.log("here in skill delete");
    skillsService.deleteSkill(skill_id)
                 .then((response) => {
                    activate();
                 })

}


}
