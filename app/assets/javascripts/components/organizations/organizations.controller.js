angular
  .module('GiiG')
  .controller('OrganizationsController', OrganizationsController);

OrganizationsController.$inject = ['$stateParams', 'organizationsService', 'locationsService'];

function OrganizationsController($stateParams, organizationsService, locationsService) {
  var vm = this;

  vm.jobs = [];
  vm.locations = [];
  

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
    // })
  }
}
