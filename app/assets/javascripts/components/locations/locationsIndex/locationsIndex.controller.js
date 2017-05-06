angular
  .module('GiiG')
  .controller('LocationsIndexController', LocationsIndexController);

LocationsIndexController.$inject = ['locationsService'];

function LocationsIndexController(locationsService) {
  var vm = this;

  vm.skills = [];

  locationsService.getLocations().then(function(response) {
    vm.locations = response.data;
  });
}