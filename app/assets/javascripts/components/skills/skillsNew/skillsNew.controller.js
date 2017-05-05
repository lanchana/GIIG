angular
  .module('GiiG')
  .controller('SkillsNewController', SkillsNewController);

SkillsNewController.$inject = ['$state', 'skillsService'];

function SkillsNewController($state, skillsService) {
  var vm = this;

  vm.skill = {
    position_type: '',
    rating: '0.0'
  };

  vm.saveSkill = saveSkill;

  function saveSkill() {
    skillsService.createSkill(vm.skill)
                  .then((response) => {
                    if(response.status == 201) {
                      $state.go('skillsIndex')
                    } else {
                      alert('Server is Down')
                    }
                  });
  }
}
