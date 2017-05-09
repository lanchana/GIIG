angular
  .module('GiiG')
  .controller('ApplicantController', ApplicantController);

ApplicantController.$inject = ['$stateParams', '$scope', 
                                'applicantService', 
                                'locationsService'];

function ApplicantController($stateParams, $scope, 
                              applicantService, 
                              locationsService) {
  var vm = this;

  vm.jobs = [];
  vm.acceptJob  = acceptJob;


  activate();

  function activate() {
    console.log ('applicant Contoller 10 :' + vm.user_id);
      applicantService.getJobs().then(function(response) {
        vm.jobs = response.data;
      // console.log(vm.jobs);
      });
  }

  function acceptJob(job_id) {
    console.log('acceptJob' + job_id);
    applicantService.updateJob(job_id);
  }
  //   console.log(“delete”+ job_id);
  //   jobsService.deleteJob(location_id, job_id)
  //             .then((response) => {
  //               console.log('delete job 2');
  //               activate();
  //            });
  
}

