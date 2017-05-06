angular
    .module('GiiG')
    .controller('JobsEditController', JobsEditController);

JobsEditController.$inject = ['$stateParams', '$state', 'jobsService',];

function JobsEditController($stateParams, $state, jobsService) {
  var vm = this;

  vm.job = {};

  vm.saveJob = saveJob;

  jobsService.getJob($stateParams.location_id,$stateParams.job_id).then(function(resp) {
    vm.job = resp.data;
    // console.log(vm.job);
  });

  function saveJob() {
    jobsService.updateJob($stateParams.location_id,$stateParams.job_id, vm.job).then(function(resp) {
      if(resp.status == 200) {
        $state.go('jobsIndex', { location_id: resp.data.location_id })
      } else {
        alert('Something went wrong when trying to update')
      }
    });
  }
}
