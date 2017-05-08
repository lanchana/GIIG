angular
  .module('GiiG')
  .controller('JobsIndexController', JobsIndexController);

JobsIndexController.$inject = ['$stateParams', 'jobsService'];

function JobsIndexController($stateParams, jobsService) {
  var vm = this;

  vm.jobs = [];
  vm.location = $stateParams.location_id;
  vm.jobDelete  = jobDelete;

  activate(); 

  function activate() {
  jobsService.getJobs($stateParams.location_id).then(function(response) {
    vm.jobs = response.data;
    // vm.location = vm.jobs[0].location_id;
    console.log(vm.location);    // console.log(vm.jobs)
  });
  }

  function jobDelete(location_id, job_id) {
    console.log("delete"+ job_id);
    jobsService.deleteJob(location_id, job_id)
              .then((response) => {
                console.log("delete job 2");
                activate();
              });
  }


}
