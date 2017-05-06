angular
  .module('GiiG')
  .controller('JobsIndexController', JobsIndexController);

JobsIndexController.$inject = ['jobsService'];

function JobsIndexController(jobsService) {
  var vm = this;

  vm.jobs = [];

  jobsService.getJobs().then(function(response) {
    vm.jobs = response.data;
    // console.log(vm.jobs)
  });
}
