angular
  .module('GiiG')
  .controller('ApplicantController', ApplicantController);

ApplicantController.$inject = ['$stateParams', 'applicantService', 'jobsService', 'locationsService'];

function ApplicantController($stateParams, applicantService, jobsService, locationsService) {
  var vm = this;

  vm.jobs = [];
  vm.jobseeker = [];
  vm.job = [];

  activate();

  function activate() {
    applicantService.getApplicant($stateParams.jobseeker_id).then(function(response) {
      vm.jobseeker = response.data;
      console.log ("controller jobseeker " + vm.jobseeker);
    });

    console.log ("in between two functions");

    jobsService.getJob($stateParams.location_id, $stateParams.job_id).then(function(resp) {
      vm.job = resp.data;
      console.log ("behind the 2nd function");
    });



    applicantService.getApplicantJobs($stateParams.jobseeker_id).then(function(response) {
      vm.jobs = response.data;
      console.log ("controller.js | " + vm.jobs);
    })

  }
}
