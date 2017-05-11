angular
  .module('GiiG')
  .controller('OrganizationsController', OrganizationsController);

OrganizationsController.$inject =  ['$stateParams',
                                    '$state',
                                    'organizationsService',
                                    'locationsService',
                                    'jobsService'];

function OrganizationsController($stateParams,
                                 $state,
                                 organizationsService,
                                 locationsService,
                                 jobsService) {
  var vm = this;

  vm.jobs = [];

  // vm.jobDelete = jobDelete;

  vm.locations = [];
  vm.postJob = postJob;
  vm.jobDelete = jobDelete;

  activate();



  function activate() {
    organizationsService.getJobs().then(function(response) {
        vm.jobs = response.data;
        console.log(response);
    });

    locationsService.getLocations().then(function(response) {
        vm.locations = response.data;
        // console.log(vm.locations);
    });
  }

  function jobDelete(location_id, job_id) {
    console.log("delete"+ job_id);
    jobsService.deleteJob(location_id, job_id)
              .then(function(response) {
                activate();
              });
  }

  function postJob(location) {
    console.log('hitting postJob');
    $state.go('jobsNew', ({location_id: location.id}));
  }
  
}
