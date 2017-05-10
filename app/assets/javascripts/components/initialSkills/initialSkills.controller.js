angular
  .module('GiiG')
  .controller('InitialSkillsController', InitialSkillsController);

InitialSkillsController.$inject = ['$stateParams', 'initialSkillsService'];

function InitialSkillsController($stateParams, initialSkillsService) {
  var vm = this;

  vm.skillsArray = [];
  vm.data = [];
  vm.data.cb1 = '';
  vm.data.cb2 = '';
  vm.data.cb3 = '';
  vm.data.cb4 = '';
  vm.data.cb5 = '';

  console.log ("views controller");

    vm.saveSkills = saveSkills;
    
    // activate();

    function saveSkills() {
      console.log (vm.data);
      console.log (vm.data.cb1);

      initialSkillsService.postSkills(vm.skillsArray)
       .then((response) => {
        if(response.status == 201) {
            $state.go('/jobseeker')  
               // can be added like this to the state {location_id: vm.location})
        } else {
            alert('server is down')
        }
       });
    }
  }
 

