angular
  .module('GiiG')
  .controller('JobSeekersController', JobSeekersController);

JobSeekersController.$inject = [];

function JobSeekersController() {
  var vm = this;

  vm.jobs = [];
  vm.user_id = $stateParams.user_id;
  vm.acceptJob  = acceptJob;

  activate(); 

  function activate() {
  	jobsService.getJobs($stateParams.location_id).then(function(response) {
  	  vm.jobs = response.data;
  		});
  }

  // function acceptJob(user_id, job_id) {
  //   console.log("delete"+ job_id);
  //   jobsService.deleteJob(location_id, job_id)
  //             .then((response) => {
  //               console.log("delete job 2");
  //               activate();
  //             });
  }

}
