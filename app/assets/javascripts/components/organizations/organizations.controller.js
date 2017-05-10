angular
  .module('GiiG')
  .controller('OrganizationsController', OrganizationsController);

OrganizationsController.$inject = ['$stateParams', '$state', 'organizationsService', 'locationsService'];

function OrganizationsController($stateParams, $state, organizationsService, locationsService) {
  var vm = this;

  vm.jobs = [];

  // vm.jobDelete = jobDelete;

  vm.locations = [];
  vm.postJob = postJob;

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

  function postJob(location) {
    console.log('hitting postJob');
    $state.go('jobsNew', ({location_id: location.id}));
  }
}
