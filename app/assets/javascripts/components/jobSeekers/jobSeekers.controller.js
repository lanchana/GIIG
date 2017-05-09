angular
  .module('GiiG')
  .controller('JobSeekersController', JobSeekersController);

JobSeekersController.$inject = ['$stateParams', 'jobseekersService'];

function JobSeekersController($stateParams, jobseekersService) {
  var vm = this;

 vm.jobs = [];
  // vm.acceptJob  = acceptJob;

 activate();

 function activate() {

    console.log (“jobseekers Contoller 10 :” + vm.user_id);
      jobseekersService.getJobs().then(function(response) {

        vm.jobs = response.data;
      // console.log(vm.jobs);
      });
  }

 // function acceptJob(user_id, job_id) {
  //   console.log(“delete”+ job_id);
  //   jobsService.deleteJob(location_id, job_id)
  //             .then((response) => {
  //               console.log('delete job 2');
  //               activate();
  //            });


}
