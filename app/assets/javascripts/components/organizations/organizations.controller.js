angular
  .module('GiiG')
  .controller('OrganizationsController', OrganizationsController);

OrganizationsController.$inject = ['$stateParams', 'organizationsService'];

function OrganizationsController($stateParams, organizationsService) {
  var vm = this;

  vm.jobs = [];
  vm.location = $stateParams.location_id;
  // vm.jobDelete = jobDelete;

  activate();

  function activate() {
    organizationsService.getJobs($stateParams.location_id).then(function(response) {
        vm.jobs = response.data;
        console.log(response)
    });
  }
}
