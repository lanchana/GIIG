angular
    .module('GiiG')
    .controller('JobsEditController', JobsEditController);

JobsEditController.$inject = ['$stateParams', '$state', 'jobsService', 'positionsService'];

function JobsEditController($stateParams, $state, jobsService, positionsService) {
  var vm = this;

  vm.job = {};

  vm.saveJob = saveJob;

  vm.positions = [];

    activate();

    function activate() {
      positionsService.getPositions()
        .then(function(response) {
        vm.positions = response.data;
        console.log(vm.positions[0])
        //console.log("getting positions | ");
      });
    }

  jobsService.getJob($stateParams.location_id,$stateParams.job_id).then(function(resp) {
    vm.job = resp.data;
    // console.log(vm.job);
  });

  function saveJob() {
    jobsService.updateJob($stateParams.location_id,$stateParams.job_id, vm.job).then(function(resp) {
      if(resp.status == 200) {
        $state.go('organization')
      } else {
        alert('Something went wrong when trying to update')
      }
    });
  }
}
