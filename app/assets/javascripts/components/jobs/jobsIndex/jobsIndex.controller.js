angular
  .module('GiiG')
  .controller('JobsIndexController', JobsIndexController);

JobsIndexController.$inject = ['$stateParams', 'jobsService'];

function JobsIndexController($stateParams, jobsService) {
  var vm = this;

  vm.jobs = [];
  vm.location = $stateParams.location_id;

  jobsService.getJobs().then(function(response) {
    vm.jobs = response.data;
    // vm.location = vm.jobs[0].location_id;
    console.log(vm.location);    // console.log(vm.jobs)
  });
}
