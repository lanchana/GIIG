angular
  .module('GiiG')
  .controller('OrganizationsController', OrganizationsController);

OrganizationsController.$inject = ['$stateParams', 'organizationsService'];

function OrganizationsController($stateParams, organizationsService) {
  var vm = this;

  vm.jobs = [];
  // vm.jobDelete = jobDelete;

  activate();

  function activate() {
    organizationsService.getJobs().then(function(response) {
        vm.jobs = response.data;
    });
  }
}
