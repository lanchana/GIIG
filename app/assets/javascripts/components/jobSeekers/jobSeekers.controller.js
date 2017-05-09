angular
  .module('GiiG')
  .controller('JobSeekersController', JobSeekersController);

JobSeekersController.$inject = ['$stateParams', 
                            'jobseekersService', 
                            'locationsService']';

function JobSeekersController($stateParams, jobseekersService, jobseekersService) {
  var vm = this;

 vm.jobs = [];
  vm.user_id = $stateParams.id;
  // vm.acceptJob  = acceptJob;

 activate();

 function activate() {
    console.log ('jobseekers Contoller 10 :' + vm.user_id);
      jobseekersService.getJobs(vm.user_id).then(function(response) {
        vm.jobs = response.data;
      // console.log(vm.jobs);
      });

    function showLocation(location_id) {
      locationsService.getLocation($stateParams.id).then(function(response) {
        vm.location = response.data;
        // console.log(vm.location);
        }
      }
    });



  }

 // function acceptJob(user_id, job_id) {
  //   console.log(“delete”+ job_id);
  //   jobsService.deleteJob(location_id, job_id)
  //             .then((response) => {
  //               console.log(“delete job 2”);
  //               activate();
  //            });
  

}