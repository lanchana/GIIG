angular
  .module('GiiG')
  .controller('ApplicantController', ApplicantController);

ApplicantController.$inject = ['$stateParams', 'applicantService'];

function ApplicantController($stateParams, applicantService) {
  var vm = this;

  vm.jobs = [];
  vm.jobseeker = [];

  activate();

  function activate() {
    applicantService.getApplicant($stateParams.jobseeker_id).then(function(response) {
      vm.jobseeker = response.data;
      console.log ("controller jobseeker " + vm.jobseeker);
    });

    console.log ("in between two functions");

    applicantService.getApplicantJobs($stateParams.jobseeker_id).then(function(response) {
      vm.jobs = response.data;
      console.log ("controller.js | " + vm.jobs);
    })

  }
}

